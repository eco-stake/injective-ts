import ExecArgVaultRedeem from './wasm/exec-args/ExecArgVaultRedeem'
import ExecArgVaultSubscribe from './wasm/exec-args/ExecArgVaultSubscribe'

export type ExecArgs = ExecArgVaultRedeem | ExecArgVaultSubscribe
