<template>
  <div class="grid grid-cols-1 gap-y-12">
    <div class="info-wrapper">
      <div class="grid grid-cols-1 gap-y-8">
        <BalCard>
          <div class="grid grid-cols-1 gap-y-4">
            <h4>{{ $t('availableToClaim') }}</h4>
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
            <h4>{{ $t('lockedRewards') }}</h4>
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
      <BalCard>
        3
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
import useUserRewardPoolsQuery from '@/composables/queries/useUserRewardPoolsQuery';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LiquidityRewards',
  components: { PoolsTable },

  setup() {
    const {
      data: userRewardPools,
      isLoading: isLoadingUserRewardPools
    } = useUserRewardPoolsQuery();

    return {
      userRewardPools,
      isLoadingUserRewardPools
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
