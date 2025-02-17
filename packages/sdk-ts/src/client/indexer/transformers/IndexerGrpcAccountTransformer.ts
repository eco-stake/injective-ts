import {
  RewardsResponse,
  PortfolioResponse,
  SubaccountHistoryResponse,
  SubaccountBalancesListResponse,
  SubaccountBalanceEndpointResponse,
} from '@injectivelabs/indexer-api/injective_accounts_rpc_pb'
import { Coin } from '@injectivelabs/ts-types'
import { grpcPagingToPaging } from '../../..//utils/pagination'
import { GrpcCoin } from '../../../types/index'
import {
  TransferType,
  TradingReward,
  AccountPortfolio,
  SubaccountBalance,
  SubaccountDeposit,
  GrpcTradingReward,
  SubaccountTransfer,
  SubaccountPortfolio,
  GrpcAccountPortfolio,
  GrpcSubaccountBalance,
  GrpcSubaccountDeposit,
  GrpcSubaccountPortfolio,
  GrpcSubaccountBalanceTransfer,
} from '../types/account'

/**
 * @category Indexer Grpc Transformer
 */
export class IndexerGrpcAccountTransformer {
  static accountPortfolioResponseToAccountPortfolio(
    response: PortfolioResponse,
  ): AccountPortfolio {
    const portfolio = response.getPortfolio()!
    const subaccounts = portfolio?.getSubaccountsList() || []

    return {
      portfolioValue: portfolio.getPortfolioValue(),
      availableBalance: portfolio.getAvailableBalance(),
      lockedBalance: portfolio.getLockedBalance(),
      unrealizedPnl: portfolio.getUnrealizedPnl(),
      subaccountsList: subaccounts.map(
        IndexerGrpcAccountTransformer.grpcSubaccountPortfolioToSubaccountPortfolio,
      ),
    }
  }

  static grpcSubaccountPortfolioToSubaccountPortfolio(
    subaccountPortfolio: GrpcSubaccountPortfolio,
  ): SubaccountPortfolio {
    return {
      subaccountId: subaccountPortfolio.getSubaccountId(),
      availableBalance: subaccountPortfolio.getAvailableBalance(),
      lockedBalance: subaccountPortfolio.getLockedBalance(),
      unrealizedPnl: subaccountPortfolio.getUnrealizedPnl(),
    }
  }

  static grpcAccountPortfolioToAccountPortfolio(
    portfolio: GrpcAccountPortfolio,
  ): AccountPortfolio {
    return {
      portfolioValue: portfolio.getPortfolioValue(),
      availableBalance: portfolio.getAvailableBalance(),
      lockedBalance: portfolio.getLockedBalance(),
      unrealizedPnl: portfolio.getUnrealizedPnl(),
      subaccountsList: portfolio
        .getSubaccountsList()
        .map(
          IndexerGrpcAccountTransformer.grpcSubaccountPortfolioToSubaccountPortfolio,
        ),
    }
  }

  static grpcAmountToAmount(amount: GrpcCoin): Coin {
    return {
      amount: amount.getAmount(),
      denom: amount.getDenom(),
    }
  }

  static grpcDepositToDeposit(
    deposit: GrpcSubaccountDeposit,
  ): SubaccountDeposit {
    return {
      totalBalance: deposit.getTotalBalance(),
      availableBalance: deposit.getAvailableBalance(),
    }
  }

  static balancesResponseToBalances(
    response: SubaccountBalancesListResponse,
  ): SubaccountBalance[] {
    return response
      .getBalancesList()
      .map((b) => IndexerGrpcAccountTransformer.grpcBalanceToBalance(b))
  }

  static balanceResponseToBalance(
    response: SubaccountBalanceEndpointResponse,
  ): SubaccountBalance {
    return IndexerGrpcAccountTransformer.grpcBalanceToBalance(
      response.getBalance()!,
    )
  }

  static grpcBalanceToBalance(
    balance: GrpcSubaccountBalance,
  ): SubaccountBalance {
    const deposit = balance.getDeposit()

    return {
      subaccountId: balance.getSubaccountId(),
      accountAddress: balance.getAccountAddress(),
      denom: balance.getDenom(),
      deposit: deposit
        ? IndexerGrpcAccountTransformer.grpcDepositToDeposit(deposit)
        : undefined,
    }
  }

  static grpcBalancesToBalances(
    balances: GrpcSubaccountBalance[],
  ): SubaccountBalance[] {
    return balances.map((balance) =>
      IndexerGrpcAccountTransformer.grpcBalanceToBalance(balance),
    )
  }

  static grpcTransferHistoryEntryToTransferHistoryEntry(
    transfer: GrpcSubaccountBalanceTransfer,
  ): SubaccountTransfer {
    const amount = transfer.getAmount()

    return {
      transferType: transfer.getTransferType() as TransferType,
      srcSubaccountId: transfer.getSrcSubaccountId(),
      srcSubaccountAddress: transfer.getSrcAccountAddress(),
      dstSubaccountId: transfer.getDstSubaccountId(),
      dstSubaccountAddress: transfer.getDstAccountAddress(),
      executedAt: transfer.getExecutedAt(),
      amount: amount
        ? IndexerGrpcAccountTransformer.grpcAmountToAmount(amount)
        : undefined,
    }
  }

  static tradingRewardsResponseToTradingRewards(
    response: RewardsResponse,
  ): TradingReward[] {
    const rewards = response.getRewardsList()

    return rewards.map(
      IndexerGrpcAccountTransformer.grpcTradingRewardToTradingReward,
    )
  }

  static grpcTradingRewardsToTradingRewards(
    rewards: GrpcTradingReward[],
  ): TradingReward[] {
    return rewards.map(
      IndexerGrpcAccountTransformer.grpcTradingRewardToTradingReward,
    )
  }

  static grpcTradingRewardToTradingReward(
    reward: GrpcTradingReward,
  ): TradingReward {
    return {
      accountAddress: reward.getAccountAddress(),
      rewards: reward
        .getRewardsList()
        .map((r) => ({ amount: r.getAmount(), denom: r.getDenom() })),
      distributedAt: reward.getDistributedAt(),
    }
  }

  static transferHistoryResponseToTransferHistory(
    response: SubaccountHistoryResponse,
  ) {
    const transfers = response.getTransfersList()
    const pagination = response.getPaging()

    return {
      transfers: transfers.map((transfer) =>
        IndexerGrpcAccountTransformer.grpcTransferHistoryEntryToTransferHistoryEntry(
          transfer,
        ),
      ),
      pagination: grpcPagingToPaging(pagination),
    }
  }

  static grpcTransferHistoryToTransferHistory(
    transfers: GrpcSubaccountBalanceTransfer[],
  ): SubaccountTransfer[] {
    return transfers.map((transfer) =>
      IndexerGrpcAccountTransformer.grpcTransferHistoryEntryToTransferHistoryEntry(
        transfer,
      ),
    )
  }
}
