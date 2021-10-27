<template>
  <div class="grid grid-cols-1 gap-y-12">
    <div class="info-wrapper">
      <div class="grid grid-cols-1 gap-y-8">
        <BalCard>
          <div class="grid grid-cols-1 gap-y-4">
            <h3>{{ $t('availableToClaim') }}</h3>
            <div class="flex justify-between items-end">
              <span class="text-xl font-semibold text-purple-500">15 HALT</span>
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
              <span class="text-xl font-semibold text-purple-500">15 HALT</span>
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
            :total-steps="totalSteps"
          >
            <div class="text-center">
              <h3>{{ $t('totalRewards') }}</h3>
              <div class="text-4xl font-semibold text-purple-500">
                {{ totalRewards }} HALT
              </div>
              <div>$ 151.67</div>
            </div>
          </radial-progress-bar>
          <div>legend</div>
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

export default defineComponent({
  name: 'LiquidityRewards',
  components: { PoolsTable, RadialProgressBar },

  setup() {
    const {
      data: userRewardPoolsData,
      isLoading: isLoadingUserRewardPools
    } = useUserRewardPoolsQuery();

    const userRewardPools = computed(() => userRewardPoolsData.value ?? []);

    return {
      userRewardPools,
      isLoadingUserRewardPools,
      completedSteps: 4,
      totalSteps: 10,
      totalRewards: 150
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
</style>
