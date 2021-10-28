import { POOLS } from '@/constants/pools';
import { FETCH_ONCE_OPTIONS } from '@/constants/vue-query';
import { LiquidityRewards__factory } from '@/lib/typechain';
import { configService } from '@/services/config/config.service';
import useWeb3 from '@/services/web3/useWeb3';
import { UseQueryOptions } from 'react-query/types';
import { computed, reactive } from 'vue';
import { useQuery } from 'vue-query';

export default function useLiquidityMiningRewardsQuery(
  rewardPoolIds: number[],
  options: UseQueryOptions = {}
) {
  /**
   * COMPOSABLES
   */
  const { getProvider, account, isWalletReady } = useWeb3();

  /**
   * COMPUTED
   */
  const enabled = computed(() => isWalletReady.value);

  const liquidityRewardContract = computed(() =>
    LiquidityRewards__factory.connect(
      configService.network.addresses.liquidityRewards,
      getProvider()
    )
  );

  /**
   * QUERY INPUTS
   */
  const queryKey = reactive(['liquidityMiningRewards', account, rewardPoolIds]);

  const queryFn = async () => {
    const totalRewards = await liquidityRewardContract.value.getTotalRewardsAfterVestingForAllPools();
    const byPool = await Promise.all(
      rewardPoolIds.map(async rewardPoolId => {
        const [
          { stakedAmountLPT, claimedRewards },
          claimableRewards
        ] = await Promise.all([
          liquidityRewardContract.value.userPoolInfo(
            account.value,
            rewardPoolId
          ),
          liquidityRewardContract.value.getClaimableVestedRewardsForSpecificPool(
            rewardPoolIds
          )
        ]);
        return {
          rewardPoolId,
          poolId: POOLS.Reward[rewardPoolId],
          stakedAmountLPT,
          claimedRewards,
          claimableRewards
        };
      })
    );
    return {
      totalRewards,
      byPool
    };
  };

  const queryOptions = reactive({
    enabled,
    ...FETCH_ONCE_OPTIONS,
    ...options
  });

  return useQuery(queryKey, queryFn, queryOptions as any);
}
