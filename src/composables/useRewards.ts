import useLiquidityMiningRewardsQuery from '@/composables/queries/useLiquidityMiningRewardsQuery';
import { BigNumber } from '@ethersproject/bignumber';
import { computed } from 'vue-demi';

export default function useRewards(poolIds: string[] = []) {
  const liquidityMiningRewardsQuery = useLiquidityMiningRewardsQuery(poolIds);

  const total = computed(
    () =>
      liquidityMiningRewardsQuery.data.value?.totalRewards ?? BigNumber.from(0)
  );

  const claimable = computed(
    () =>
      liquidityMiningRewardsQuery.data.value?.byPool.reduce(
        (acc, value) => acc.add(value.claimableRewards),
        BigNumber.from(0)
      ) ?? BigNumber.from(0)
  );

  return {
    total,
    claimable,
    byPool: computed(() => liquidityMiningRewardsQuery.data.value?.byPool ?? [])
  };
}
