import docker from './docker.json';
import fantomTestnet from './testnet.json';

export interface Config {
  key: string;
  chainId: number;
  chainName: string;
  name: string;
  shortName: string;
  network: string;
  unknown: boolean;
  rpc: string;
  publicRpc?: string;
  ws: string;
  loggingRpc: string;
  explorer: string;
  subgraph: string;
  poolsUrlV1: string;
  poolsUrlV2: string;
  supportsEIP1559: boolean;
  supportsElementPools: boolean;
  nativeAsset: {
    name: string;
    address: string;
    symbol: string;
    decimals: number;
    deeplinkId: string;
    logoURI: string;
  };
  addresses: {
    exchangeProxy: string;
    merkleRedeem: string;
    multicall: string;
    vault: string;
    weightedPoolFactory: string;
    stablePoolFactory: string;
    weth: string;
    stETH: string;
    wstETH: string;
    lidoRelayer: string;
    balancerHelpers: string;
    liquidityRewards: string;
  };
  strategies: Record<
    string,
    {
      type: string;
      name: string;
    }
  >;
}

const config: Record<string, Config> = {
  // '1': homestead,
  // '42': kovan,
  // '4': rinkeby,
  // '137': polygon,
  // '42161': arbitrum,
  // '12345': test,
  '4002': fantomTestnet,
  // @ts-ignore
  '17': docker
};

export default config;
