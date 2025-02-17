import { MsgWithdrawValidatorCommission as BaseMsgWithdrawValidatorCommission } from '@injectivelabs/chain-api/cosmos/distribution/v1beta1/tx_pb'
import { MsgBase } from '../../MsgBase'
import snakecaseKeys from 'snakecase-keys'

export declare namespace MsgWithdrawValidatorCommission {
  export interface Params {
    validatorAddress: string
  }

  export type Proto = BaseMsgWithdrawValidatorCommission

  export type Object = BaseMsgWithdrawValidatorCommission.AsObject
}

/**
 * @category Messages
 */
export default class MsgWithdrawValidatorCommission extends MsgBase<
  MsgWithdrawValidatorCommission.Params,
  MsgWithdrawValidatorCommission.Proto,
  MsgWithdrawValidatorCommission.Object
> {
  static fromJSON(
    params: MsgWithdrawValidatorCommission.Params,
  ): MsgWithdrawValidatorCommission {
    return new MsgWithdrawValidatorCommission(params)
  }

  public toProto() {
    const { params } = this

    const message = new BaseMsgWithdrawValidatorCommission()
    message.setValidatorAddress(params.validatorAddress)

    return message
  }

  public toData() {
    const proto = this.toProto()

    return {
      '@type': '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
      ...proto.toObject(),
    }
  }

  public toAmino() {
    const proto = this.toProto()
    const message = {
      ...snakecaseKeys(proto.toObject()),
    }

    return {
      type: 'cosmos-sdk/MsgWithdrawDelegationReward',
      value: message,
    }
  }

  public toWeb3() {
    const amino = this.toAmino()
    const { value } = amino

    return {
      '@type': '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
      ...value,
    }
  }

  public toDirectSign() {
    const proto = this.toProto()

    return {
      type: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
      message: proto,
    }
  }
}
