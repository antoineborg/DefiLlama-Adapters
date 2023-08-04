const ADDRESSES = require('../../../helper/coreAssets.json')
const avalanchePools = [
  {
    id: "cham-avic-usdc",
    name: "AVIC - USDC 🔥",
    token: "AVIC - USDC",
    tokenDescription:
      "Championfinance.io - AVIC-USDC LP AC Auto Fee Share Vault 🔥",
    tokenAddress: "0x7748456409D4Eee3FaCE6aD0c492DD9853A1CC3d",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - AVIC-USDC LP",
    earnedTokenAddress: "0x720Ee1f99eAB68ffB5182510EBC66c365BfD442b",
    earnContractAddress: "0x720Ee1f99eAB68ffB5182510EBC66c365BfD442b",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "cham-avic-usdc",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "Championfinance",
    assets: ["AVIC", "USDC"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0x59B18817CA9f4ad2dEE6FBf30132dF6AEb9D763d/0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0x59B18817CA9f4ad2dEE6FBf30132dF6AEb9D763d&outputCurrency=0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e#/",
  },
  {
    id: "cham-cham-usdc",
    name: "CHAM - USDC 🔥",
    token: "CHAM - USDC",
    tokenDescription:
      "Championfinance.io - CHAM-USDC LP AC Auto Fee Share Vault 🔥",
    tokenAddress: "0xd6F18CDe9A52A9D815dd3C03C2325D453E32BDef",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - CHAM-USDC LP",
    earnedTokenAddress: "0x24dDB3c0F3B51D832cf43c3b121987b8698e32aD",
    earnContractAddress: "0x24dDB3c0F3B51D832cf43c3b121987b8698e32aD",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "cham-cham-usdc",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "Championfinance",
    assets: ["CHAM", "USDC"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0xc65bC1E906771e105fBAcBD8dfE3862Ee7BE378E/0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0xc65bC1E906771e105fBAcBD8dfE3862Ee7BE378E&outputCurrency=0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e#/",
  },
  {
    id: "cham-avic-cham",
    name: "AVIC - CHAM 🔥",
    token: "AVIC - CHAM",
    tokenDescription:
      "Championfinance.io - AVIC-CHAM LP AC Auto Fee Share Vault 🔥",
    tokenAddress: "0x17f2F59331de85e0b9dCE25EAB48aEBF71C63e46",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - AVIC-CHAM LP",
    earnedTokenAddress: "0x2a426A878BB768473AD898aC7f8ee41b0894ee56",
    earnContractAddress: "0x2a426A878BB768473AD898aC7f8ee41b0894ee56",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "cham-avic-cham",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "Championfinance",
    assets: ["CHAM", "AVIC"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0x59B18817CA9f4ad2dEE6FBf30132dF6AEb9D763d/0xc65bC1E906771e105fBAcBD8dfE3862Ee7BE378E#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0xc65bC1E906771e105fBAcBD8dfE3862Ee7BE378E&outputCurrency=0x59B18817CA9f4ad2dEE6FBf30132dF6AEb9D763d#/",
  },
  {
    id: "grape-grapesp-mim",
    name: "SL GRAPE - MIM 🔥",
    token: "SL GRAPE - MIM",
    tokenDescription:
      "(WINE FARM) - Swapsicle GRAPE - MIM LP AC Auto Burn Vault 🔥",
    tokenAddress: "0x9076C15D7b2297723ecEAC17419D506AE320CbF1",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - Sl - Grape - MIM LP",
    earnedTokenAddress: "0x0dA1DC567D81925cFf22Df74C6b9e294E9E1c3A5",
    earnContractAddress: "0x0dA1DC567D81925cFf22Df74C6b9e294E9E1c3A5",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "grape-grapesp-mim",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "Grape",
    assets: ["GRAPE", "MIM"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://www.swapsicle.io/add/0x130966628846BFd36ff31a822705796e8cb8C18D/0x5541D83EFaD1f281571B343977648B75d95cdAC2",
    buyTokenUrl:
      "https://www.swapsicle.io/swap/0x130966628846bfd36ff31a822705796e8cb8c18d/0x5541d83efad1f281571b343977648b75d95cdac2",
  },
  {
    id: "swapsicle-grape-mim",
    name: "Swapsicle GRAPE - MIM 🔥",
    token: "Swapsicle GRAPE - MIM",
    tokenDescription:
      "swapsicle.io - Swapsicle GRAPE - MIM LP AC Auto Burn Vault 🔥",
    tokenAddress: "0x9076C15D7b2297723ecEAC17419D506AE320CbF1",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - Swapsicle - Grape - MIM LP",
    earnedTokenAddress: "0x7c9EeC0e542DF35280224bECf9AF76d2E4cD910f",
    earnContractAddress: "0x7c9EeC0e542DF35280224bECf9AF76d2E4cD910f",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "swapsicle-grape-mim",
    oraclePrice: 0,
    depositsPaused: true,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "Swapsicle",
    assets: ["GRAPE", "MIM"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://www.swapsicle.io/add/0x130966628846BFd36ff31a822705796e8cb8C18D/0x5541D83EFaD1f281571B343977648B75d95cdAC2",
    buyTokenUrl:
      "https://www.swapsicle.io/swap/0x130966628846bfd36ff31a822705796e8cb8c18d/0x5541d83efad1f281571b343977648b75d95cdac2",
  },
  {
    id: "grape-grape",
    logo: "single-assets/GRAPE.png",
    name: "GRAPE 🔥",
    token: "GRAPE",
    tokenDescription:
      "grapefinance.app - GRAPE Single Stake AC Auto Burn Vault",
    tokenAddress: "0x5541D83EFaD1f281571B343977648B75d95cdAC2",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - GRAPE Single Stake",
    earnedTokenAddress: "0xDFc0Cc5c036c52131fb351e50ba322b4D00Ce60B",
    earnContractAddress: "0xDFc0Cc5c036c52131fb351e50ba322b4D00Ce60B",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "tokens",
    oracleId: "GRAPE",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Grape",
    assets: ["GRAPE"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_NONE",
      "MCAP_MICRO",
      "AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "SingleStake",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0xc55036b5348cfb45a932481744645985010d3a44#/",
  },
  {
    id: "grape-grape-mim",
    name: "GRAPE - MIM 🔥",
    token: "GRAPE - MIM",
    tokenDescription: "grapefinance.app - GRAPE - MIM LP AC Auto Burn Vault 🔥",
    tokenAddress: "0xb382247667fe8CA5327cA1Fa4835AE77A9907Bc8",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - Grape - MIM LP",
    earnedTokenAddress: "0xe8cE63e37bB4B662837144058c298C4e7Fd0b93C",
    earnContractAddress: "0xe8cE63e37bB4B662837144058c298C4e7Fd0b93C",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "grape-grape-mim",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "Grape",
    assets: ["GRAPE", "MIM"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0x130966628846bfd36ff31a822705796e8cb8c18d/0x5541d83efad1f281571b343977648b75d95cdac2#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0x5541d83efad1f281571b343977648b75d95cdac2#/",
  },
  {
    id: "grape-wine-mim",
    name: "WINE - MIM ",
    token: "WINE - MIM",
    tokenDescription: "grapefinance.app - WINE - MIM LP AC Vault ",
    tokenAddress: "0x00cB5b42684DA62909665d8151fF80D1567722c3",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - WINE-MIM LP",
    earnedTokenAddress: "0x0B2a90132fC171B37c6999845703C90479B7124F",
    earnContractAddress: "0x0B2a90132fC171B37c6999845703C90479B7124F",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "grape-wine-mim",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "Grape",
    assets: ["WINE", "MIM"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0x130966628846bfd36ff31a822705796e8cb8c18d/0xc55036b5348cfb45a932481744645985010d3a44#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0xc55036b5348cfb45a932481744645985010d3a44#/",
  },
  {
    id: "grape-grape-wine",
    name: "GRAPE - WINE ",
    token: "GRAPE - WINE",
    tokenDescription: "grapefinance.app - GRAPE - WINE LP AC Vault ",
    tokenAddress: "0xd3d477Df7f63A2623464Ff5Be6746981FdeD026F",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - GRAPE-WINE LP",
    earnedTokenAddress: "0x03bC623B17f6D34Fc861d7C4C17D927B50994D7c",
    earnContractAddress: "0x03bC623B17f6D34Fc861d7C4C17D927B50994D7c",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "grape-wine-mim",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "Grape",
    assets: ["GRAPE", "WINE"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0x5541d83efad1f281571b343977648b75d95cdac2/0xc55036b5348cfb45a932481744645985010d3a44#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0x5541d83efad1f281571b343977648b75d95cdac2&outputCurrency=0xc55036b5348cfb45a932481744645985010d3a44#/",
  },
  {
    id: "joe-wlrs-usdibs",
    name: "WLRS - USDibs 🔥",
    token: "WLRS - USDibs 🔥",
    tokenDescription:
      "frozenwalrus.finance - WLRS - USDibs LP AC Auto Burn Vault 🔥",
    tokenAddress: "0x26E6E2CbE80A7408573BE67578ee5c10F2984f99",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - WLRS - USDIBS",
    earnedTokenAddress: "0xda77b161A9aBc0a22406D1B618DcC68D5737Cb9A",
    earnContractAddress: "0xda77b161A9aBc0a22406D1B618DcC68D5737Cb9A",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "joe-wlrs-usdibs",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "JOE",
    assets: ["WLRS", "USDIBS"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0x0EfA5328FEfCe96C8d10661bd97403764D477853/0x395908aeb53d33A9B8ac35e148E9805D34A555D3#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0x0EfA5328FEfCe96C8d10661bd97403764D477853&outputCurrency=0x395908aeb53d33A9B8ac35e148E9805D34A555D3#/",
  },
  {
    id: "joe-nrwl-yusd",
    name: "NRWL - YUSD 🔥",
    token: "NRWL - YUSD 🔥",
    tokenDescription:
      "frozenwalrus.finance - NRWL - YUSD LP AC Auto Burn Vault 🔥",
    tokenAddress: "0xE4f4f9DD9cD45bC44FD517f4AE490591030274F6",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - NRWL-YUSD",
    earnedTokenAddress: "0xCa887Ed67D7031cdEcd93b6670909EE00ccEBB68",
    earnContractAddress: "0xCa887Ed67D7031cdEcd93b6670909EE00ccEBB68",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "joe-nrwl-yusd",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "JOE",
    assets: ["NRWL", "YUSD"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://www.swapsicle.io/add/0x501012893eE88976AB8B5289B7a78E307d5d9DCb/0x111111111111ed1D73f860F57b2798b683f2d325",
    buyTokenUrl:
      "https://www.swapsicle.io/swap/0x501012893eE88976AB8B5289B7a78E307d5d9DCb/0x111111111111ed1D73f860F57b2798b683f2d325",
  },
  {
    id: "joe-wlrs-usdc",
    name: "WLRS - USDC.e 🔥",
    token: "WLRS - USDC.e 🔥",
    tokenDescription:
      "frozenwalrus.finance - WLRS - USDC.e LP AC Auto Burn Vault 🔥",
    tokenAddress: "0x82845B52b53c80595bbF78129126bD3E6Fc2C1DF",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - WLRS - USDC",
    earnedTokenAddress: "0x92B1B91237388c2611Aa5df29A8059c9C8BE2366",
    earnContractAddress: "0x92B1B91237388c2611Aa5df29A8059c9C8BE2366",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "joe-wlrs-usdc",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "JOE",
    assets: ["WLRS", "USDC"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664/0x395908aeb53d33A9B8ac35e148E9805D34A555D3#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664&outputCurrency=0x395908aeb53d33A9B8ac35e148E9805D34A555D3#/",
  },
  {
    id: "joe-wshare-usdc",
    name: "WSHARE - USDC.e 🔥",
    token: "WSHARE - USDC.e 🔥",
    tokenDescription: "frozenwalrus.finance - WSHARE - USDC.e LP AC  Vault 🔥",
    tokenAddress: "0x03d15E0451e54Eec95ac5AcB5B0a7ce69638c62A",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - WSHARE - USDC",
    earnedTokenAddress: "0xFD368aCD61dAFDceB544309a3F793Dab5c615fAe",
    earnContractAddress: "0xFD368aCD61dAFDceB544309a3F793Dab5c615fAe",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "joe-wshare-usdc",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "JOE",
    assets: ["WSHARE", "USDC"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664/0xe6d1aFea0B76C8f51024683DD27FA446dDAF34B6#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664&outputCurrency=0xe6d1aFea0B76C8f51024683DD27FA446dDAF34B6#/",
  },
  {
    id: "piggy-piggy-avax",
    name: "PIGGY - AVAX 🔥",
    token: "PIGGY - AVAX 🔥",
    tokenDescription: "piggyfinance.io - PIGGY - AVAX LP AC Auto Burn Vault 🔥",
    tokenAddress: "0x2440885843d8e9f16a4b64933354d1CfBCf7F180",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - PIGGY - AVAX",
    earnedTokenAddress: "0xe74131997f5e61a06384a70F2a924fCBDb102035",
    earnContractAddress: "0xe74131997f5e61a06384a70F2a924fCBDb102035",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "piggy-piggy-avax",
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "JOE",
    assets: ["PIGGY", "AVAX"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/AVAX/0x1a877B68bdA77d78EEa607443CcDE667B31B0CdF#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?outputCurrency=0x1a877B68bdA77d78EEa607443CcDE667B31B0CdF",
  },
  {
    id: "bam-bam-usdc",
    name: "BAM - USDC 🔥",
    token: "BAM - USDC 🔥",
    tokenDescription: "bamboofinance.app - BAM - USDC LP AC Auto Burn Vault 🔥",
    tokenAddress: "0xbe7C737FCC2D6EBA0e4e73A073a0120171287769",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - BAM - USDC",
    earnedTokenAddress: "0x12AefAa0c1961d450D5772a5e94D721A9eBAF72c",
    earnContractAddress: "0x12AefAa0c1961d450D5772a5e94D721A9eBAF72c",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "bam-bam-usdc",
    oraclePrice: 0,
    depositsPaused: true,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "JOE",
    assets: ["BAM", "USDC"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/0x5cc339Aa2A582D857F38B85F662Ea3513706a1E7#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E&outputCurrency=0x5cc339Aa2A582D857F38B85F662Ea3513706a1E7#/",
  },
  {
    id: "bam-bdao-usdc",
    name: "BDAO - USDC 🔥",
    token: "BDAO - USDC 🔥",
    tokenDescription: "bamboofinance.app - BDAO - USDC LP AC Vault",
    tokenAddress: "0x0774F0acC4DD1CA84BC8521FEe6dC2f7D22f133f",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "MagikFarm - BDAO - USDC",
    earnedTokenAddress: "0xB5E8BB16a8cc347d3671Cb7d855a7776e34c9E35",
    earnContractAddress: "0xB5E8BB16a8cc347d3671Cb7d855a7776e34c9E35",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "bam-bdao-usdc",
    oraclePrice: 0,
    depositsPaused: true,
    partnership: true,
    isMooStaked: true,
    status: "active",
    platform: "JOE",
    assets: ["BDAO", "USDC"],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_LOW",
      "5AUDIT",
      "CONTRACTS_VERIFIED",
    ],
    stratType: "StratLP",
    addLiquidityUrl:
      "https://traderjoexyz.com/pool/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/0x83c7412931398502922a35911E5Fab221822f4B6#/",
    buyTokenUrl:
      "https://traderjoexyz.com/trade?inputCurrency=0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E&outputCurrency=0x83c7412931398502922a35911E5Fab221822f4B6#/",
  },
];

module.exports = avalanchePools;
