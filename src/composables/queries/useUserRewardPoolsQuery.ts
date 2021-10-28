import { forChange } from '@/lib/utils';
import { balancerSubgraphService } from '@/services/balancer/subgraph/balancer-subgraph.service';
import useWeb3 from '@/services/web3/useWeb3';
import { flatten } from 'lodash';
import { UseQueryOptions } from 'react-query/types';
import { computed, reactive } from 'vue';
import { useQuery } from 'vue-query';
import useTokenLists from '../useTokenLists';
import useTokens from '../useTokens';
import useUserSettings from '../useUserSettings';
import useLiquidityMiningRewardsQuery from './useLiquidityMiningRewardsQuery';

export default function useUserRewardPoolsQuery(options: UseQueryOptions = {}) {
  /**
   * COMPOSABLES
   */
  const { injectTokens, prices, dynamicDataLoading } = useTokens();
  const { loadingTokenLists } = useTokenLists();
  const { data: liquidityMiningRewardsData } = useLiquidityMiningRewardsQuery([
    0,
    1,
    2,
    3
  ]);
  const { account, isWalletReady } = useWeb3();
  const { currency } = useUserSettings();

  /**
   * COMPUTED
   */
  const enabled = computed(
    () =>
      isWalletReady.value &&
      account.value != null &&
      !loadingTokenLists.value &&
      Boolean(liquidityMiningRewardsData.value)
  );

  /**
   * QUERY PROPERTIES
   */
  const queryKey = reactive(['userRewardPoolsQuery']);

  const queryFn = async () => {
    const poolSharesIds =
      liquidityMiningRewardsData.value?.byPool
        .filter(reward => reward.stakedAmountLPT.gt(0))
        .map(reward => reward.poolId) ?? [];

    const pools = await balancerSubgraphService.pools.get({
      where: {
        id_in: poolSharesIds
      }
    });
    pools.forEach(pool => {
      pool.claimableRewards = liquidityMiningRewardsData.value?.byPool.find(
        item => item.poolId === pool.id
      )?.claimableRewards;
    });
    const tokens = flatten(pools.map(pool => pool.tokensList));
    await injectTokens(tokens);
    await forChange(dynamicDataLoading, false);
    const decoratedPools = await balancerSubgraphService.pools.decorate(
      pools,
      '24h',
      prices.value,
      currency.value
    );
    return decoratedPools;
  };

  const queryOptions = reactive({
    enabled,
    ...options
  });

  return useQuery(queryKey, queryFn, queryOptions as any);
}
