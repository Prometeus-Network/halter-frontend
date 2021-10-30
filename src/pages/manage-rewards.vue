<template>
  <div class="lg:container lg:mx-auto pt-10 md:pt-12">
    <h2>{{ $t('manageYourRewards') }}</h2>

    <BalTabs v-model="activeTab" :tabs="tabs" class="pt-4 mb-6" no-pad />
    <template v-if="activeTab === 'liquidity'">
      <liquidity-rewards />
    </template>
    <template v-if="activeTab === 'trading'">
      <h1>trading</h1>
    </template>
    <template v-if="activeTab === 'staking'">
      <h1>staking</h1>
    </template>
  </div>
</template>

<script lang="ts">
import LiquidityRewards from '@/components/pages/manage-rewards/LiquidityRewards.vue';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    LiquidityRewards
  },

  setup() {
    const { t } = useI18n();

    const tabs = [
      { value: 'liquidity', label: t('liquidityMining') },
      { value: 'trading', label: t('tradingRewards') },
      { value: 'staking', label: t('stakingRewards') }
    ];
    const activeTab = ref(tabs[0].value);

    return { tabs, activeTab };
  }
});
</script>
