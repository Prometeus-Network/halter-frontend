<template>
  <BalPopover no-pad>
    <template v-slot:activator>
      <BalBtn
        color="white"
        :size="upToLargeBreakpoint ? 'md' : 'sm'"
        class="mr-2 p-1 relative"
        :circle="upToLargeBreakpoint"
      >
        {{ totalRewards }} HALT
      </BalBtn>
    </template>
    <BalCard class="w-72" noBorder>
      <div class="grid grid-cols-1 gap-y-4">
        <div>
          <div class="text-gray-500">{{ $t('totalRewards') }}:</div>
          <div class="flex justify-between">
            <span class="font-semibold">{{ totalRewards }} HALT</span>
            <span>$ x.xx</span>
          </div>
        </div>

        <div>
          <div class="text-gray-500">{{ $t('availableToClaim') }}:</div>
          <div class="flex justify-between">
            <span class="font-semibold">{{ claimableRewards }} HALT</span>
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
import useRewards from '@/composables/useRewards';
import useBreakpoints from '@/composables/useBreakpoints';
import useWeb3 from '@/services/web3/useWeb3';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AppNavActivityBtn',

  components: {},

  setup() {
    /**
     * COMPOSABLES
     */
    const { upToLargeBreakpoint } = useBreakpoints();
    const { isLoadingProfile, profile, account, getSigner } = useWeb3();
    const { t } = useI18n();

    const { total, claimable } = useRewards();

    return {
      // computed,
      totalRewards: total,
      claimableRewards: claimable,
      account,
      profile,
      upToLargeBreakpoint,
      isLoadingProfile
    };
  }
});
</script>
