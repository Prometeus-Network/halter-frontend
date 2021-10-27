import useLiquidityMiningRewardsQuery from '@/composables/queries/useLiquidityMiningRewardsQuery';
import { computed } from 'vue-demi';

export default function useRewards() {
  const liquidityMiningRewardsQuery = useLiquidityMiningRewardsQuery([
    0,
    1,
    2,
    3
  ]);

  return {
    total: 150,
    claimable: 15
  };
}
