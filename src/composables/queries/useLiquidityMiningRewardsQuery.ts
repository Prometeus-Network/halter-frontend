import { reactive, computed, Ref } from 'vue';
import { useQuery } from 'vue-query';
import { UseQueryOptions } from 'react-query/types';
import { Contract } from '@ethersproject/contracts';
import LiquidityRewardsAbi from '@/lib/abi/LiquidityRewards.json';
import { FETCH_ONCE_OPTIONS } from '@/constants/vue-query';

import useWeb3 from '@/services/web3/useWeb3';
import { configService } from '@/services/config/config.service';
import { BigNumber } from '@ethersproject/bignumber';
import { POOLS } from '@/constants/pools';

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

  const vaultContract = computed(
    () =>
      new Contract(
        configService.network.addresses.liquidityRewards,
        LiquidityRewardsAbi,
        getProvider()
      )
  );

  /**
   * QUERY INPUTS
   */
  const queryKey = reactive(['liquidityMiningRewards', account, rewardPoolIds]);

  const queryFn = async () => {
    return await Promise.all(
      rewardPoolIds.map(async rewardPoolId => {
        const {
          stakedAmountLPT,
          claimedRewards
        } = (await vaultContract.value.userPoolInfo(
          account.value,
          rewardPoolId
        )) as {
          stakedAmountLPT: BigNumber;
          claimedRewards: number;
        };
        return {
          rewardPoolId,
          poolId: POOLS.Reward[rewardPoolId],
          stakedAmountLPT,
          claimedRewards
        };
      })
    );
  };

  const queryOptions = reactive({
    enabled,
    ...FETCH_ONCE_OPTIONS,
    ...options
  });

  return useQuery(queryKey, queryFn, queryOptions as any);
}
