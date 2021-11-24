import useLiquidityMiningRewardsQuery from '@/composables/queries/useLiquidityMiningRewardsQuery';
import { configService } from '@/services/config/config.service';
import { BigNumber } from '@ethersproject/bignumber';
import { computed } from 'vue-demi';
import useWeb3 from '@/services/web3/useWeb3';

export default function useStakingRewards() {
  const { account } = useWeb3();
  const { getToken, balanceFor } = useTokens();
  const {
    data: stakingRewardsData,
    refetch: refetchStakingRewards
  } = useStackingRewardsQuery();
  const [unlockedContract, lockedContract] = useStakingRewardsContracts();
  const { currentWeek } = useRewardsWeek();
  const { addTransaction } = useTransactions();
  const { txListener } = useEthers();
}
