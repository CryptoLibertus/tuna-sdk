/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getBooleanDecoder,
  getBooleanEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/kit';
import { TUNA_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const SET_SUSPENDED_STATE_DISCRIMINATOR = new Uint8Array([
  145, 13, 20, 161, 30, 62, 226, 32,
]);

export function getSetSuspendedStateDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    SET_SUSPENDED_STATE_DISCRIMINATOR
  );
}

export type SetSuspendedStateInstruction<
  TProgram extends string = typeof TUNA_PROGRAM_ADDRESS,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountTunaConfig extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAuthority extends string
        ? WritableSignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountTunaConfig extends string
        ? WritableAccount<TAccountTunaConfig>
        : TAccountTunaConfig,
      ...TRemainingAccounts,
    ]
  >;

export type SetSuspendedStateInstructionData = {
  discriminator: ReadonlyUint8Array;
  suspendLendingDeposits: boolean;
  suspendLendingWithdrawals: boolean;
  suspendAddLiquidity: boolean;
  suspendRemoveLiquidity: boolean;
};

export type SetSuspendedStateInstructionDataArgs = {
  suspendLendingDeposits: boolean;
  suspendLendingWithdrawals: boolean;
  suspendAddLiquidity: boolean;
  suspendRemoveLiquidity: boolean;
};

export function getSetSuspendedStateInstructionDataEncoder(): Encoder<SetSuspendedStateInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['suspendLendingDeposits', getBooleanEncoder()],
      ['suspendLendingWithdrawals', getBooleanEncoder()],
      ['suspendAddLiquidity', getBooleanEncoder()],
      ['suspendRemoveLiquidity', getBooleanEncoder()],
    ]),
    (value) => ({ ...value, discriminator: SET_SUSPENDED_STATE_DISCRIMINATOR })
  );
}

export function getSetSuspendedStateInstructionDataDecoder(): Decoder<SetSuspendedStateInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['suspendLendingDeposits', getBooleanDecoder()],
    ['suspendLendingWithdrawals', getBooleanDecoder()],
    ['suspendAddLiquidity', getBooleanDecoder()],
    ['suspendRemoveLiquidity', getBooleanDecoder()],
  ]);
}

export function getSetSuspendedStateInstructionDataCodec(): Codec<
  SetSuspendedStateInstructionDataArgs,
  SetSuspendedStateInstructionData
> {
  return combineCodec(
    getSetSuspendedStateInstructionDataEncoder(),
    getSetSuspendedStateInstructionDataDecoder()
  );
}

export type SetSuspendedStateInput<
  TAccountAuthority extends string = string,
  TAccountTunaConfig extends string = string,
> = {
  authority: TransactionSigner<TAccountAuthority>;
  tunaConfig: Address<TAccountTunaConfig>;
  suspendLendingDeposits: SetSuspendedStateInstructionDataArgs['suspendLendingDeposits'];
  suspendLendingWithdrawals: SetSuspendedStateInstructionDataArgs['suspendLendingWithdrawals'];
  suspendAddLiquidity: SetSuspendedStateInstructionDataArgs['suspendAddLiquidity'];
  suspendRemoveLiquidity: SetSuspendedStateInstructionDataArgs['suspendRemoveLiquidity'];
};

export function getSetSuspendedStateInstruction<
  TAccountAuthority extends string,
  TAccountTunaConfig extends string,
  TProgramAddress extends Address = typeof TUNA_PROGRAM_ADDRESS,
>(
  input: SetSuspendedStateInput<TAccountAuthority, TAccountTunaConfig>,
  config?: { programAddress?: TProgramAddress }
): SetSuspendedStateInstruction<
  TProgramAddress,
  TAccountAuthority,
  TAccountTunaConfig
> {
  // Program address.
  const programAddress = config?.programAddress ?? TUNA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    authority: { value: input.authority ?? null, isWritable: true },
    tunaConfig: { value: input.tunaConfig ?? null, isWritable: true },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.tunaConfig),
    ],
    programAddress,
    data: getSetSuspendedStateInstructionDataEncoder().encode(
      args as SetSuspendedStateInstructionDataArgs
    ),
  } as SetSuspendedStateInstruction<
    TProgramAddress,
    TAccountAuthority,
    TAccountTunaConfig
  >;

  return instruction;
}

export type ParsedSetSuspendedStateInstruction<
  TProgram extends string = typeof TUNA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    authority: TAccountMetas[0];
    tunaConfig: TAccountMetas[1];
  };
  data: SetSuspendedStateInstructionData;
};

export function parseSetSuspendedStateInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSetSuspendedStateInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 2) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      authority: getNextAccount(),
      tunaConfig: getNextAccount(),
    },
    data: getSetSuspendedStateInstructionDataDecoder().decode(instruction.data),
  };
}
