<template>
  <div class="text-center">
    <div class="text-sm font-semibold">
      {{ $t('linearVestingDisclaimerTitle') }}
    </div>
    <div>{{ $t('linearVestingDisclaimerBody') }}</div>
    <BalBtn
      color="gradient"
      class="mt-2 w-full"
      @click.prevent="earnRewards"
      :loading="isLoading"
      >{{ $t('earnRewards') }}</BalBtn
    >
  </div>
</template>

<script lang="ts">
import useTokenApprovals from '@/composables/pools/useTokenApprovals';
import useLiquidityRewardsContract from '@/composables/useLiquidityRewardsContract';
import useTokens from '@/composables/useTokens';
import useTransactions from '@/composables/useTransactions';
import useNotifications from '@/composables/useNotifications';
import { POOLS } from '@/constants/pools';
import { DecoratedPool } from '@/services/balancer/subgraph/types';
import { parseUnits } from '@ethersproject/units';
import { defineComponent, PropType, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMutation } from 'vue-query';

export default defineComponent({
  components: {},

  props: {
    pool: { type: Object as PropType<DecoratedPool>, required: true },
    loading: { type: Boolean, default: true }
  },

  setup(props) {
    const { balanceFor } = useTokens();
    const lpTokenBalances = ref([balanceFor(props.pool.address)]);
    const {
      requiredAllowances,
      approveAllowances,
      approving,
      approvedAll
    } = useTokenApprovals([props.pool.address], lpTokenBalances);
    const liquidityRewardContract = useLiquidityRewardsContract();
    const { addTransaction } = useTransactions();
    const { addNotification } = useNotifications();
    const { t } = useI18n();

    const depositLptMutation = useMutation(async () => {
      const pid = POOLS.Reward.indexOf(props.pool.id);
      const parsedAmount = parseUnits(lpTokenBalances.value[0], 18);

      try {
        const tx = await liquidityRewardContract.value.depositLPT(
          1,
          parsedAmount
        );

        addTransaction({
          id: tx.hash,
          type: 'tx',
          action: 'deposit',
          summary: t('transactionSummary.deposit'),
          details: {
            contractAddress: liquidityRewardContract.value.address
          }
        });
      } catch (error) {
        addNotification({
          type: 'error',
          title: 'Something went wrong',
          message: (error as any)?.data.message
        });
        console.error(error);
      }
    });

    async function earnRewards() {
      if (requiredAllowances.value.length && !approvedAll.value) {
        await approveAllowances();
      }

      await depositLptMutation.mutateAsync();
    }

    return {
      earnRewards,
      isLoading: approving.value && depositLptMutation.isLoading
    };
  }
});
</script>
