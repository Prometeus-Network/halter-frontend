import { POOLS } from '@/constants/pools';
import { FETCH_ONCE_OPTIONS } from '@/constants/vue-query';
import useWeb3 from '@/services/web3/useWeb3';
import { UseQueryOptions } from 'react-query/types';
import { computed, reactive } from 'vue';
import { useQuery } from 'vue-query';
import useLiquidityRewardsContract from '../useLiquidityRewardsContract';

export function poolIdToRewardPoolId(...poolIds: string[]) {
  return (poolIds.length ? poolIds : POOLS.Reward)
    .map(poolId => POOLS.Reward.indexOf(poolId))
    .filter(index => index !== -1);
}

export default function useLiquidityMiningRewardsQuery(
  poolIds: string[],
  options: UseQueryOptions = {}
) {
  /**
   * COMPOSABLES
   */
  const { account, isWalletReady } = useWeb3();

  /**
   * COMPUTED
   */
  const enabled = computed(() => isWalletReady.value);
  const rewardPoolIds = computed(() => poolIdToRewardPoolId(...poolIds));

  const liquidityRewardContract = useLiquidityRewardsContract();

  /**
   * QUERY INPUTS
   */
  const queryKey = reactive([
    'liquidityMiningRewards',
    account,
    rewardPoolIds.value
  ]);

  const queryFn = async () => {
    const totalRewards = await liquidityRewardContract.value.getTotalRewardsAfterVestingForAllPools();
    const byPool = await Promise.all(
      rewardPoolIds.value.map(async rewardPoolId => {
        const [
          { stakedAmountLPT, claimedRewards },
          claimableRewards
        ] = await Promise.all([
          liquidityRewardContract.value.userPoolInfo(
            account.value,
            rewardPoolId
          ),
          liquidityRewardContract.value.getClaimableVestedRewardsForSpecificPool(
            rewardPoolId
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
