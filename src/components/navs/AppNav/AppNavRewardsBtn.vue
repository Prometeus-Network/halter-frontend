<template>
  <BalPopover no-pad>
    <template v-slot:activator>
      <BalBtn
        color="white"
        :size="upToLargeBreakpoint ? 'md' : 'sm'"
        class="mr-2 p-1 relative"
        :circle="upToLargeBreakpoint"
      >
        <StarsIcon
          :class="{ 'mr-2': !upToLargeBreakpoint }"
          v-if="upToLargeBreakpoint"
        />
        <BalLoadingIcon size="sm" v-if="userClaimsLoading" />
        <span class="hidden lg:block" v-else>
          {{ fNumToken(totalRewards) }} HALT
        </span>
      </BalBtn>
    </template>
    <BalCard class="w-72" noBorder>
      <div class="grid grid-cols-1 gap-y-4">
        <div>
          <div class="text-gray-500">{{ $t('totalRewards') }}:</div>
          <div class="flex justify-between">
            <span class="font-semibold"
              >{{ fNumToken(totalRewards) }} HALT</span
            >
            <span>$ x.xx</span>
          </div>
        </div>

        <div>
          <div class="text-gray-500">{{ $t('availableToClaim') }}:</div>
          <div class="flex justify-between">
            <span class="font-semibold"
              >{{ fNumToken(claimableRewards) }} HALT</span
            >
            <span>$ x.xx</span>
          </div>
        </div>

        <BalBtn color="purple" flat outline>{{ $t('claim') }}</BalBtn>
        <router-link :to="{ name: 'manage-rewards' }">
          <BalBtn color="gradient" class="w-full">{{
            $t('manageRewards')
          }}</BalBtn>
        </router-link>
      </div>
    </BalCard>
  </BalPopover>
</template>

<script lang="ts">
import useBreakpoints from '@/composables/useBreakpoints';
import useNumbers from '@/composables/useNumbers';
import useLiquidityRewards from '@/composables/rewards/useLiquidityRewards';
import useStakingRewardsQuery from '@/composables/queries/useStakingRewardsQuery';
import useTradingRewardsQuery from '@/composables/queries/useTradingRewardsQuery';
import useWeb3 from '@/services/web3/useWeb3';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavActivityBtn',

  components: {},

  setup() {
    /**
     * COMPOSABLES
     */
    const { upToLargeBreakpoint } = useBreakpoints();
    const { isLoadingProfile, profile, account } = useWeb3();
    const { fNumToken } = useNumbers();

    const { total, claimable } = useLiquidityRewards();
    const { data: stakingRewardsData } = useStakingRewardsQuery();
    const { data: tradingRewardsData } = useTradingRewardsQuery();

    const totalRewards = computed(() =>
      total.value
        .add(stakingRewardsData.value?.locked.totalRewards ?? 0)
        .add(stakingRewardsData.value?.unlocked.totalRewards ?? 0)
        .add(tradingRewardsData.value?.totalRewards ?? 0)
    );

    const claimableRewards = computed(() =>
      claimable.value
        .add(stakingRewardsData.value?.locked.vestedRewards ?? 0)
        .add(stakingRewardsData.value?.unlocked.vestedRewards ?? 0)
        .add(tradingRewardsData.value?.claimableRewards ?? 0)
    );

    return {
      totalRewards,
      claimableRewards,
      account,
      profile,
      upToLargeBreakpoint,
      isLoadingProfile,
      fNumToken
    };
  }
});
</script>
