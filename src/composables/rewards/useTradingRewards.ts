import { BigNumber } from '@ethersproject/bignumber';
import { ref } from 'vue-demi';

export default function useTradingRewards() {
  const total = ref(BigNumber.from(0));
  const claimable = ref(BigNumber.from(100));

  return {
    total,
    claimable
  };
}
