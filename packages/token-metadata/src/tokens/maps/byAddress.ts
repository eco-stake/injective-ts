import { TokenMeta } from '../../types'
import tokens from '../tokens'

export default {
  [tokens.wBTC.address.toLowerCase()]: tokens.wBTC,
  [tokens.WETH.address.toLowerCase()]: tokens.WETH,
  [tokens.INJ.address.toLowerCase()]: tokens.INJ,
  [tokens.USDT.address.toLowerCase()]: tokens.USDT,
  [tokens.USDC.address.toLowerCase()]: tokens.USDC,
  [tokens.GRT.address.toLowerCase()]: tokens.GRT,
  [tokens.SNX.address.toLowerCase()]: tokens.SNX,
  [tokens.DAI.address.toLowerCase()]: tokens.DAI,
  [tokens.BNB.address.toLowerCase()]: tokens.BNB,
  [tokens.AAVE.address.toLowerCase()]: tokens.AAVE,
  [tokens.YFI.address.toLowerCase()]: tokens.YFI,
  [tokens.COMP.address.toLowerCase()]: tokens.COMP,
  [tokens.ZRX.address.toLowerCase()]: tokens.ZRX,
  [tokens.MATIC.address.toLowerCase()]: tokens.MATIC,
  [tokens.UNI.address.toLowerCase()]: tokens.UNI,
  [tokens.LINK.address.toLowerCase()]: tokens.LINK,
  [tokens.SUSHI.address.toLowerCase()]: tokens.SUSHI,
  [tokens['1INCH'].address.toLowerCase()]: tokens['1INCH'],
  [tokens.AXS.address.toLowerCase()]: tokens.AXS,
  [tokens.BAT.address.toLowerCase()]: tokens.BAT,
  [tokens.BUSD.address.toLowerCase()]: tokens.BUSD,
  [tokens.CEL.address.toLowerCase()]: tokens.CEL,
  [tokens.CELL.address.toLowerCase()]: tokens.CELL,
  [tokens.CHZ.address.toLowerCase()]: tokens.CHZ,
  [tokens.DEFI5.address.toLowerCase()]: tokens.DEFI5,
  [tokens.ENJ.address.toLowerCase()]: tokens.ENJ,
  [tokens.EVAI.address.toLowerCase()]: tokens.EVAI,
  [tokens.FTM.address.toLowerCase()]: tokens.FTM,
  [tokens.HT.address.toLowerCase()]: tokens.HT,
  [tokens.NEXO.address.toLowerCase()]: tokens.NEXO,
  [tokens.NOIA.address.toLowerCase()]: tokens.NOIA,
  [tokens.OCEAN.address.toLowerCase()]: tokens.OCEAN,
  [tokens.PAXG.address.toLowerCase()]: tokens.PAXG,
  [tokens.POOL.address.toLowerCase()]: tokens.POOL,
  [tokens.RUNE.address.toLowerCase()]: tokens.RUNE,
  [tokens.SHIB.address.toLowerCase()]: tokens.SHIB,
  [tokens.STARS.address.toLowerCase()]: tokens.STARS,
  [tokens.STT.address.toLowerCase()]: tokens.STT,
  [tokens.SWAP.address.toLowerCase()]: tokens.SWAP,
  [tokens.UMA.address.toLowerCase()]: tokens.UMA,
  [tokens.UTK.address.toLowerCase()]: tokens.UTK,
  [tokens.ATOM.address.toLowerCase()]: tokens.ATOM,
  [tokens.UATOM.address.toLowerCase()]: tokens.UATOM,
  [tokens.UPHOTON.address.toLowerCase()]: tokens.UPHOTON,
} as Record<string, TokenMeta>
