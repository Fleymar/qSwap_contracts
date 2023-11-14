export const configs = {
  planqMainnet: {
    WNATIVE: '0x5EBCdf1De1781e8B5D41c016B0574aD53E2F6E1A',
    nativeCurrencyLabel: 'PLQ',
    v2Factory: '0x0000000000000000000000000000000000000000',
    qswap: '0x0000000000000000000000000000000000000000',
  },
  planqTestnet: {
    WNATIVE: '0xa9898AaFAbAeC0Bb762F96b7cC1e284F943c0114',
    nativeCurrencyLabel: 'tPLQ',
    v2Factory: '0x0000000000000000000000000000000000000000',
    qswap: '0x0000000000000000000000000000000000000000',
  },
  hardhat: {
    WNATIVE: '0x0000000000000000000000000000000000000000',
    nativeCurrencyLabel: 'PLQ',
    v2Factory: '0x0000000000000000000000000000000000000000',
    qswap: '0x0000000000000000000000000000000000000000',
  },
} as const