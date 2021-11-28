<template>
  <div class="grid grid-cols-1 gap-y-12">
    <div class="info-wrapper">
      <div class="grid grid-cols-1 gap-y-8">
        <BalCard>
          <div class="grid grid-cols-1 gap-y-4">
            <h3>{{ $t('availableToClaim') }}</h3>
            <div class="flex justify-between items-end">
              <span class="text-xl font-semibold text-purple-500"
                >{{ formatToken(claimableRewards, 6) }} USDC</span
              >
              <span>$ 15.67</span>
            </div>
            <BalBtn color="purple" outline @click.prevent="claim">{{
              $t('claim')
            }}</BalBtn>
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
                >{{ formatToken(lockedRewards, 6) }} USDC</span
              >
              <span>$ 15.67</span>
            </div>
            <div class="text-gray-500 text-xs"></div>
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
                {{ formatToken(totalRewards, 6) }} USDC
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
  </div>
  <teleport to="#modal">
    <transactions-preview-modal
      v-if="modalTransactionsPreviewIsOpen"
      :transactions="transactions"
      @close="modalTransactionsPreviewIsOpen = false"
      @success="modalTransactionsPreviewIsOpen = false"
    >
      {{ $t('withdrawTokensWarning') }}
    </transactions-preview-modal>
  </teleport>
</template>

<script lang="ts">
import useStackingRewardsQuery from '@/composables/queries/useStakingRewardsQuery';
import useUserRewardPoolsQuery from '@/composables/queries/useUserRewardPoolsQuery';
import useStakingRewardsContracts from '@/composables/rewards/useStakingRewardsContract';
import useEthers from '@/composables/useEthers';
import useNumbers from '@/composables/useNumbers';
import useRewardsWeek from '@/composables/useRewardsWeek';
import useTransactions from '@/composables/useTransactions';
import { BigNumber } from '@ethersproject/bignumber';
import { computed, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import RadialProgressBar from 'vue-radial-progress';
import TransactionsPreviewModal, {
  Transaction
} from '@/components/modals/TransactionsPreviewModal.vue';
import useNotifications from '@/composables/useNotifications';

export default defineComponent({
  name: 'StakingRewards',
  components: { RadialProgressBar, TransactionsPreviewModal },

  setup() {
    const { isLoading: isLoadingUserRewardPools } = useUserRewardPoolsQuery();
    const {
      data: stakingRewardsData,
      refetch: refetchStakingRewards
    } = useStackingRewardsQuery();
    const [unlockedContract, lockedContract] = useStakingRewardsContracts();
    const { currentWeek } = useRewardsWeek();
    const { addTransaction } = useTransactions();
    const { txListener } = useEthers();
    const { fNumToken } = useNumbers();
    const { addErrorNotification } = useNotifications();

    const formatToken = (amount: string, decimals: number) =>
      fNumToken(amount, decimals);

    const totalRewards = computed(
      () =>
        stakingRewardsData.value?.unlocked.totalRewards.add(
          stakingRewardsData.value?.locked.totalRewards
        ) ?? BigNumber.from(0)
    );

    const claimableRewards = computed(
      () =>
        stakingRewardsData.value?.unlocked.vestedRewards.add(
          stakingRewardsData.value?.locked.vestedRewards
        ) ?? BigNumber.from(0)
    );

    const lockedRewards = computed(() =>
      totalRewards.value.sub(claimableRewards.value)
    );

    const { t } = useI18n();
    const transactions = ref<Transaction[]>([]);
    const modalTransactionsPreviewIsOpen = ref(false);

    async function claim() {
      if (
        stakingRewardsData.value?.unlocked.vestedRewards.gt(
          BigNumber.from('0')
        ) &&
        stakingRewardsData.value?.locked.vestedRewards.gt(BigNumber.from('0'))
      ) {
        console.log(stakingRewardsData.value?.unlocked.vestedRewards);
        console.log(stakingRewardsData.value?.locked.vestedRewards);
        transactions.value = [
          {
            title: t('claim'),
            handler: async () => {
              try {
                const tx = await lockedContract.value.claimRewards(
                  currentWeek.value
                );
                addTransaction({
                  id: tx.hash,
                  type: 'tx',
                  action: 'claim',
                  summary: t('transactionSummary.claimRewards'),
                  details: {
                    contractAddress: lockedContract.value.address
                  }
                });
              } catch (error) {
                addErrorNotification((error as any)?.data.message);
                console.error(error);
              }
            }
          },
          {
            title: t('claim'),
            handler: async () => {
              try {
                const tx = await unlockedContract.value.claimRewards(
                  currentWeek.value.toString()
                );

                addTransaction({
                  id: tx.hash,
                  type: 'tx',
                  action: 'claim',
                  summary: t('transactionSummary.claimingRewards'),
                  details: {
                    contractAddress: unlockedContract.value.address
                  }
                });
              } catch (error) {
                addErrorNotification((error as any)?.data.message);
                console.error(error);
              }
            }
          }
        ];
      } else if (
        stakingRewardsData.value?.unlocked.vestedRewards.gt(BigNumber.from('0'))
      ) {
        const tx = await unlockedContract.value.claimRewards(currentWeek.value);

        addTransaction({
          id: tx.hash,
          type: 'tx',
          action: 'claim',
          summary: t('transactionSummary.claimRewards'),
          details: {
            contractAddress: unlockedContract.value.address
          }
        });

        txListener(tx, {
          onTxConfirmed: async () => {
            refetchStakingRewards.value();
          }
        });
      } else if (
        stakingRewardsData.value?.locked.vestedRewards.gt(BigNumber.from('0'))
      ) {
        const tx = await lockedContract.value.claimRewards(currentWeek.value);

        addTransaction({
          id: tx.hash,
          type: 'tx',
          action: 'claim',
          summary: t('transactionSummary.claimingRewards'),
          details: {
            contractAddress: lockedContract.value.address
          }
        });

        txListener(tx, {
          onTxConfirmed: async () => {
            refetchStakingRewards.value();
          }
        });
      }
      modalTransactionsPreviewIsOpen.value = true;
    }
    const completedSteps = 1;

    return {
      formatToken,
      isLoadingUserRewardPools,
      claimableRewards,
      totalRewards,
      lockedRewards,
      completedSteps,
      claim,
      modalTransactionsPreviewIsOpen,
      transactions
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
