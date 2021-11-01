import useLiquidityMiningRewardsQuery from '@/composables/queries/useLiquidityMiningRewardsQuery';
import { BigNumber } from '@ethersproject/bignumber';
import { computed } from 'vue-demi';
import { formatUnits } from '@ethersproject/units';

export default function useRewards(poolIds: string[] = []) {
  const liquidityMiningRewardsQuery = useLiquidityMiningRewardsQuery(poolIds);

  const total = computed(() =>
    formatUnits(
      liquidityMiningRewardsQuery.data.value?.totalRewards ?? BigNumber.from(0),
      18
    )
  );

  const claimable = computed(() =>
    formatUnits(
      liquidityMiningRewardsQuery.data.value?.byPool.reduce(
        (acc, value) => acc.add(value.claimableRewards),
        BigNumber.from(0)
      ) ?? BigNumber.from(0),
      18
    )
  );

  return {
    total,
    claimable,
    byPool: computed(() => liquidityMiningRewardsQuery.data.value?.byPool ?? [])
  };
}
