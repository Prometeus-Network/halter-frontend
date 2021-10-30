<template>
  <div
    class="lg:container lg:mx-auto pt-10 md:pt-12 flex justify-center items-center px-6"
  >
    <bal-card class="py-6 px-4 w-full md:w-96" v-if="!state.user">
      <h2 class="mb-4">Restricted area</h2>
      <p class="mb-12">
        Only authorized users can access this area of the website. Please, use
        Metamask to authorize.
      </p>
      <BalBtn
        @click="authorize()"
        v-if="!state.user"
        :loading="state.loading"
        loadingLabel="Loading..."
        class="w-full"
        >Authorize</BalBtn
      >
    </bal-card>
    <div v-if="state.user" class="w-full md:w-1/2">
      <h2 class="mb-2">Rewards distribution</h2>

      <bal-card class="w-full">
        <BalTabs v-model="activeTab" :tabs="tabs" class="pt-4 -mb-px" no-pad />

        <template v-if="activeTab === 'invest'"> </template>
      </bal-card>
    </div>
  </div>
</template>

<script lang="ts">
import useWeb3 from '@/services/web3/useWeb3';
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { rewardsService } from '@/services/rewards';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AdminRewards',
  setup() {
    const { account, getSigner } = useWeb3();
    const { t } = useI18n();

    const state = reactive({
      loading: false,
      user: null
    });

    const tabs = [
      { value: 'invest', label: t('invest') },
      { value: 'trade', label: t('trade') },
      { value: 'stake', label: t('stake') }
    ];

    const activeTab = ref(tabs[0].value);

    const phases = [
      {
        value: 0,
        text: 'Phase 1'
      }
    ];
    const activePhase = ref(phases[0].value);

    const refreshUser = async () => {
      state.loading = true;
      try {
        const { data } = await rewardsService.getMe();
        state.user = data;
      } catch {
        console.log('Unauthorized');
      }

      state.loading = false;
    };

    onMounted(() => {
      refreshUser();
    });

    const authorize = async () => {
      state.loading = true;

      try {
        const signer = getSigner();

        const signature = await signer.signMessage(
          'Create authentication secret'
        );

        const {
          data: { message }
        } = await rewardsService.getAuthMessage(signature);

        const signedMessage = await signer.signMessage(message);

        await rewardsService.login({
          address: account.value,
          message,
          signed: signedMessage
        });

        refreshUser();
      } catch {
        state.user = null;
      }

      state.loading = false;
    };

    return {
      state,
      authorize,
      tabs,
      activeTab,
      phases,
      activePhase
    };
  }
});
</script>
