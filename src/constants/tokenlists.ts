export interface TokenListMap {
  Balancer: {
    Default: string;
    Vetted: string;
  };
  External: string[];
}

interface TokenListMapByNetwork {
  [networkKey: string]: TokenListMap;
}

/**
 * Mapping of the TokenLists used on each network
 */
export const TOKEN_LIST_MAP: TokenListMapByNetwork = {
  '1': {
    Balancer: {
      Default:
        'https://storageapi.fleek.co/balancer-team-bucket/assets/listed.tokenlist.json',
      Vetted:
        'https://storageapi.fleek.co/balancer-team-bucket/assets/vetted.tokenlist.json'
    },
    External: [
      'ipns://tokens.uniswap.org',
      'tokenlist.zerion.eth',
      'tokens.1inch.eth',
      'tokenlist.aave.eth',
      // 'https://tokens.coingecko.com/uniswap/all.json', Breaks balance/allowance fetching
      'https://umaproject.org/uma.tokenlist.json'
    ]
  },
  '42': {
    Balancer: {
      Default:
        'https://storageapi.fleek.co/balancer-team-bucket/assets/listed.tokenlist.json',
      Vetted:
        'https://storageapi.fleek.co/balancer-team-bucket/assets/vetted.tokenlist.json'
    },
    External: [
      'ipns://tokens.uniswap.org',
      // 'https://tokens.coingecko.com/uniswap/all.json',
      'https://umaproject.org/uma.tokenlist.json'
    ]
  },
  '137': {
    Balancer: {
      Default:
        'https://storageapi.fleek.co/tomafrench-team-bucket/polygon.listed.tokenlist.json',
      Vetted:
        'https://storageapi.fleek.co/tomafrench-team-bucket/polygon.vetted.tokenlist.json'
    },
    External: [
      'https://unpkg.com/quickswap-default-token-list@1.0.67/build/quickswap-default.tokenlist.json'
    ]
  },
  '42161': {
    Balancer: {
      Default:
        'https://storageapi.fleek.co/tomafrench-team-bucket/arbitrum.listed.tokenlist.json',
      Vetted:
        'https://storageapi.fleek.co/tomafrench-team-bucket/arbitrum.vetted.tokenlist.json'
    },
    External: []
  },
  '4002': {
    Balancer: {
      Default:
        'https://gist.githubusercontent.com/beshanoe/3783ce59911758e79d93c3a22974afd4/raw/e4083d43b44b032f3c879de2a5333cd52064f4b2/halter-tokenlist.json',
      Vetted:
        'https://storageapi.fleek.co/tomafrench-team-bucket/arbitrum.vetted.tokenlist.json'
    },
    External: []
  }
};
