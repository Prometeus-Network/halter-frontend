import { LiquidityRewards__factory } from '@/lib/typechain';
import { configService } from '@/services/config/config.service';
import useWeb3 from '@/services/web3/useWeb3';
import { computed } from 'vue';

export default function useLiquidityRewardsContract() {
  const { getProvider } = useWeb3();

  const liquidityRewardContract = computed(() =>
    LiquidityRewards__factory.connect(
      configService.network.addresses.liquidityRewards,
      getProvider().getSigner()
    )
  );
  return liquidityRewardContract;
}
