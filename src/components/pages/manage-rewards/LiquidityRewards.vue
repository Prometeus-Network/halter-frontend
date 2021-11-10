<template>
  <div class="grid grid-cols-1 gap-y-12">
    <div class="info-wrapper">
      <div class="grid grid-cols-1 gap-y-8">
        <BalCard>
          <div class="grid grid-cols-1 gap-y-4">
            <h3>{{ $t('availableToClaim') }}</h3>
            <div class="flex justify-between items-end">
              <span class="text-xl font-semibold text-purple-500"
                >{{ formatToken(claimableRewards) }} HALT</span
              >
              <span>$ 15.67</span>
            </div>
            <BalBtn color="purple" outline>{{ $t('claim') }}</BalBtn>
            <div class="text-gray-500 text-xs">
              {{ $t('availableToClaimWarning') }}
            </div>
          </div>
        </BalCard>
        <BalCard>
          <div class="grid grid-cols-1 gap-y-4">
            <h3>{{ $t('lockedRewards') }}</h3>
            <div class="flex justify-between items-end">
              <span class="text-xl font-semibold text-purple-500"
                >{{ formatToken(lockedRewards) }} HALT</span
              >
              <span>$ 15.67</span>
            </div>
            <BalBtn color="purple" outline>{{ $t('claim') }}</BalBtn>
            <div class="text-gray-500 text-xs">
              {{ $t('lockedRewardsWarning') }}
            </div>
          </div>
        </BalCard>
      </div>
      <BalCard growContent>
        <div class="grid grid-cols-2 h-full items-center justify-items-center">
          <radial-progress-bar
            diameter="350"
            strokeLinecap="butt"
            strokeWidth="20"
            innerStrokeWidth="20"
            startColor="#D742FF"
            stopColor="#1B52EB"
            innerStrokeColor="#E9E9F4"
            :completed-steps="completedSteps"
            total-steps="100"
          >
            <div class="text-center">
              <h3>{{ $t('totalRewards') }}</h3>
              <div class="text-4xl font-semibold text-purple-500">
                {{ formatToken(totalRewards) }} HALT
              </div>
              <div>$ 151.67</div>
            </div>
          </radial-progress-bar>
          <div class="legend-grid">
            <div class="w-8 h-8 gradient-purple-diagonal rounded-full"></div>
            <div>{{ $t('availableToClaim') }}</div>
            <div class="w-8 h-8 bg-purple-100 rounded-full"></div>
            <div>{{ $t('lockedRewards') }}</div>
          </div>
        </div>
      </BalCard>
    </div>
    <div class="grid gap-y-4">
      <h3>{{ $t('yourRewardPools') }}</h3>
      <PoolsTable
        :isLoading="isLoadingUserRewardPools"
        :data="userRewardPools"
        :noPoolsLabel="$t('noInvestments')"
        showPoolShares
        showEarnedRewards
        :selectedTokens="[]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import PoolsTable from '@/components/tables/PoolsTable/PoolsTable.vue';
import RadialProgressBar from 'vue-radial-progress';
import useUserRewardPoolsQuery from '@/composables/queries/useUserRewardPoolsQuery';
import { defineComponent, computed } from 'vue';
import useLiquidityRewards from '@/composables/rewards/useLiquidityRewards';
import BigNumber from 'bignumber.js';
import useNumbers from '@/composables/useNumbers';

export default defineComponent({
  name: 'LiquidityRewards',
  components: { PoolsTable, RadialProgressBar },

  setup() {
    const {
      data: userRewardPoolsData,
      isLoading: isLoadingUserRewardPools
    } = useUserRewardPoolsQuery();
    const { total, claimable } = useLiquidityRewards();
    const { fNumToken } = useNumbers();

    const userRewardPools = computed(() => userRewardPoolsData.value ?? []);

    const lockedRewards = computed(() => total.value.sub(claimable.value));

    const completedSteps = computed(() => {
      if (total.value.isZero()) {
        return 0;
      }
      const claimableBn = new BigNumber(claimable.value.toString());
      const totalBn = new BigNumber(total.value.toString());
      const ratio = claimableBn.dividedBy(totalBn).times(100);
      return ratio.gt(1) ? ratio.toNumber() : 0;
    });

    const formatToken = (amount: string) => fNumToken(amount);

    return {
      formatToken,
      userRewardPools,
      isLoadingUserRewardPools,
      claimableRewards: claimable,
      totalRewards: total,
      lockedRewards,
      completedSteps
    };
  }
});
</script>

<style scoped>
.info-wrapper {
  @apply grid;
  grid-template-columns: 22rem 1fr;
  column-gap: 9rem;
}

.legend-grid {
  @apply grid gap-8 items-center;
  grid-template-columns: max-content 1fr;
}
</style>
