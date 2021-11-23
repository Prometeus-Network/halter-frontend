import { computed } from 'vue-demi';

export default function useRewardsWeek() {
  const currentWeek = computed(() => 1);

  return { currentWeek };
}
