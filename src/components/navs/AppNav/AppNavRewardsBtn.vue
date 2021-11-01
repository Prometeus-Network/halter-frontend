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
          {{ fNum(totalRewards, 'token') }} HALT
        </span>
      </BalBtn>
    </template>
    <BalCard class="w-72" noBorder>
      <div class="grid grid-cols-1 gap-y-4">
        <div>
          <div class="text-gray-500">{{ $t('totalRewards') }}:</div>
          <div class="flex justify-between">
            <span class="font-semibold"
              >{{ fNum(totalRewards, 'token') }} HALT</span
            >
            <span>$ x.xx</span>
          </div>
        </div>

        <div>
          <div class="text-gray-500">{{ $t('availableToClaim') }}:</div>
          <div class="flex justify-between">
            <span class="font-semibold"
              >{{ fNum(claimableRewards, 'token') }} HALT</span
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
import useRewards from '@/composables/useRewards';
import useWeb3 from '@/services/web3/useWeb3';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavActivityBtn',

  components: {},

  setup() {
    /**
     * COMPOSABLES
     */
    const { upToLargeBreakpoint } = useBreakpoints();
    const { isLoadingProfile, profile, account } = useWeb3();
    const { fNum } = useNumbers();

    const { total, claimable } = useRewards();

    return {
      totalRewards: total,
      claimableRewards: claimable,
      account,
      profile,
      upToLargeBreakpoint,
      isLoadingProfile,
      fNum
    };
  }
});
</script>
