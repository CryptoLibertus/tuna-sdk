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
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
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
  type ReadonlyAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/kit';
import { TUNA_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';
import {
  getRemainingAccountsInfoDecoder,
  getRemainingAccountsInfoEncoder,
  type RemainingAccountsInfo,
  type RemainingAccountsInfoArgs,
} from '../types';

export const REMOVE_LIQUIDITY_FUSION_DISCRIMINATOR = new Uint8Array([
  175, 74, 205, 238, 4, 123, 166, 35,
]);

export function getRemoveLiquidityFusionDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    REMOVE_LIQUIDITY_FUSION_DISCRIMINATOR
  );
}

export type RemoveLiquidityFusionInstruction<
  TProgram extends string = typeof TUNA_PROGRAM_ADDRESS,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountTunaConfig extends string | IAccountMeta<string> = string,
  TAccountMarket extends string | IAccountMeta<string> = string,
  TAccountMintA extends string | IAccountMeta<string> = string,
  TAccountMintB extends string | IAccountMeta<string> = string,
  TAccountTokenProgramA extends string | IAccountMeta<string> = string,
  TAccountTokenProgramB extends string | IAccountMeta<string> = string,
  TAccountVaultA extends string | IAccountMeta<string> = string,
  TAccountVaultB extends string | IAccountMeta<string> = string,
  TAccountVaultAAta extends string | IAccountMeta<string> = string,
  TAccountVaultBAta extends string | IAccountMeta<string> = string,
  TAccountTunaPosition extends string | IAccountMeta<string> = string,
  TAccountTunaPositionAta extends string | IAccountMeta<string> = string,
  TAccountTunaPositionAtaA extends string | IAccountMeta<string> = string,
  TAccountTunaPositionAtaB extends string | IAccountMeta<string> = string,
  TAccountTunaPositionOwnerAtaA extends string | IAccountMeta<string> = string,
  TAccountTunaPositionOwnerAtaB extends string | IAccountMeta<string> = string,
  TAccountPythOraclePriceFeedA extends string | IAccountMeta<string> = string,
  TAccountPythOraclePriceFeedB extends string | IAccountMeta<string> = string,
  TAccountFusionammProgram extends string | IAccountMeta<string> = string,
  TAccountFusionPool extends string | IAccountMeta<string> = string,
  TAccountFusionPosition extends string | IAccountMeta<string> = string,
  TAccountMemoProgram extends string | IAccountMeta<string> = string,
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
        ? ReadonlyAccount<TAccountTunaConfig>
        : TAccountTunaConfig,
      TAccountMarket extends string
        ? WritableAccount<TAccountMarket>
        : TAccountMarket,
      TAccountMintA extends string
        ? ReadonlyAccount<TAccountMintA>
        : TAccountMintA,
      TAccountMintB extends string
        ? ReadonlyAccount<TAccountMintB>
        : TAccountMintB,
      TAccountTokenProgramA extends string
        ? ReadonlyAccount<TAccountTokenProgramA>
        : TAccountTokenProgramA,
      TAccountTokenProgramB extends string
        ? ReadonlyAccount<TAccountTokenProgramB>
        : TAccountTokenProgramB,
      TAccountVaultA extends string
        ? WritableAccount<TAccountVaultA>
        : TAccountVaultA,
      TAccountVaultB extends string
        ? WritableAccount<TAccountVaultB>
        : TAccountVaultB,
      TAccountVaultAAta extends string
        ? WritableAccount<TAccountVaultAAta>
        : TAccountVaultAAta,
      TAccountVaultBAta extends string
        ? WritableAccount<TAccountVaultBAta>
        : TAccountVaultBAta,
      TAccountTunaPosition extends string
        ? WritableAccount<TAccountTunaPosition>
        : TAccountTunaPosition,
      TAccountTunaPositionAta extends string
        ? WritableAccount<TAccountTunaPositionAta>
        : TAccountTunaPositionAta,
      TAccountTunaPositionAtaA extends string
        ? WritableAccount<TAccountTunaPositionAtaA>
        : TAccountTunaPositionAtaA,
      TAccountTunaPositionAtaB extends string
        ? WritableAccount<TAccountTunaPositionAtaB>
        : TAccountTunaPositionAtaB,
      TAccountTunaPositionOwnerAtaA extends string
        ? WritableAccount<TAccountTunaPositionOwnerAtaA>
        : TAccountTunaPositionOwnerAtaA,
      TAccountTunaPositionOwnerAtaB extends string
        ? WritableAccount<TAccountTunaPositionOwnerAtaB>
        : TAccountTunaPositionOwnerAtaB,
      TAccountPythOraclePriceFeedA extends string
        ? ReadonlyAccount<TAccountPythOraclePriceFeedA>
        : TAccountPythOraclePriceFeedA,
      TAccountPythOraclePriceFeedB extends string
        ? ReadonlyAccount<TAccountPythOraclePriceFeedB>
        : TAccountPythOraclePriceFeedB,
      TAccountFusionammProgram extends string
        ? ReadonlyAccount<TAccountFusionammProgram>
        : TAccountFusionammProgram,
      TAccountFusionPool extends string
        ? WritableAccount<TAccountFusionPool>
        : TAccountFusionPool,
      TAccountFusionPosition extends string
        ? WritableAccount<TAccountFusionPosition>
        : TAccountFusionPosition,
      TAccountMemoProgram extends string
        ? ReadonlyAccount<TAccountMemoProgram>
        : TAccountMemoProgram,
      ...TRemainingAccounts,
    ]
  >;

export type RemoveLiquidityFusionInstructionData = {
  discriminator: ReadonlyUint8Array;
  withdrawPercent: number;
  swapToToken: number;
  minRemovedAmountA: bigint;
  minRemovedAmountB: bigint;
  maxSwapSlippage: number;
  remainingAccountsInfo: RemainingAccountsInfo;
};

export type RemoveLiquidityFusionInstructionDataArgs = {
  withdrawPercent: number;
  swapToToken: number;
  minRemovedAmountA: number | bigint;
  minRemovedAmountB: number | bigint;
  maxSwapSlippage: number;
  remainingAccountsInfo: RemainingAccountsInfoArgs;
};

export function getRemoveLiquidityFusionInstructionDataEncoder(): Encoder<RemoveLiquidityFusionInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['withdrawPercent', getU32Encoder()],
      ['swapToToken', getU8Encoder()],
      ['minRemovedAmountA', getU64Encoder()],
      ['minRemovedAmountB', getU64Encoder()],
      ['maxSwapSlippage', getU32Encoder()],
      ['remainingAccountsInfo', getRemainingAccountsInfoEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: REMOVE_LIQUIDITY_FUSION_DISCRIMINATOR,
    })
  );
}

export function getRemoveLiquidityFusionInstructionDataDecoder(): Decoder<RemoveLiquidityFusionInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['withdrawPercent', getU32Decoder()],
    ['swapToToken', getU8Decoder()],
    ['minRemovedAmountA', getU64Decoder()],
    ['minRemovedAmountB', getU64Decoder()],
    ['maxSwapSlippage', getU32Decoder()],
    ['remainingAccountsInfo', getRemainingAccountsInfoDecoder()],
  ]);
}

export function getRemoveLiquidityFusionInstructionDataCodec(): Codec<
  RemoveLiquidityFusionInstructionDataArgs,
  RemoveLiquidityFusionInstructionData
> {
  return combineCodec(
    getRemoveLiquidityFusionInstructionDataEncoder(),
    getRemoveLiquidityFusionInstructionDataDecoder()
  );
}

export type RemoveLiquidityFusionInput<
  TAccountAuthority extends string = string,
  TAccountTunaConfig extends string = string,
  TAccountMarket extends string = string,
  TAccountMintA extends string = string,
  TAccountMintB extends string = string,
  TAccountTokenProgramA extends string = string,
  TAccountTokenProgramB extends string = string,
  TAccountVaultA extends string = string,
  TAccountVaultB extends string = string,
  TAccountVaultAAta extends string = string,
  TAccountVaultBAta extends string = string,
  TAccountTunaPosition extends string = string,
  TAccountTunaPositionAta extends string = string,
  TAccountTunaPositionAtaA extends string = string,
  TAccountTunaPositionAtaB extends string = string,
  TAccountTunaPositionOwnerAtaA extends string = string,
  TAccountTunaPositionOwnerAtaB extends string = string,
  TAccountPythOraclePriceFeedA extends string = string,
  TAccountPythOraclePriceFeedB extends string = string,
  TAccountFusionammProgram extends string = string,
  TAccountFusionPool extends string = string,
  TAccountFusionPosition extends string = string,
  TAccountMemoProgram extends string = string,
> = {
  /**
   *
   * TUNA accounts
   *
   */
  authority: TransactionSigner<TAccountAuthority>;
  tunaConfig: Address<TAccountTunaConfig>;
  market: Address<TAccountMarket>;
  mintA: Address<TAccountMintA>;
  mintB: Address<TAccountMintB>;
  tokenProgramA: Address<TAccountTokenProgramA>;
  tokenProgramB: Address<TAccountTokenProgramB>;
  vaultA: Address<TAccountVaultA>;
  vaultB: Address<TAccountVaultB>;
  vaultAAta: Address<TAccountVaultAAta>;
  vaultBAta: Address<TAccountVaultBAta>;
  tunaPosition: Address<TAccountTunaPosition>;
  tunaPositionAta: Address<TAccountTunaPositionAta>;
  tunaPositionAtaA: Address<TAccountTunaPositionAtaA>;
  tunaPositionAtaB: Address<TAccountTunaPositionAtaB>;
  tunaPositionOwnerAtaA: Address<TAccountTunaPositionOwnerAtaA>;
  tunaPositionOwnerAtaB: Address<TAccountTunaPositionOwnerAtaB>;
  pythOraclePriceFeedA: Address<TAccountPythOraclePriceFeedA>;
  pythOraclePriceFeedB: Address<TAccountPythOraclePriceFeedB>;
  /**
   *
   * Fusion accounts
   *
   */
  fusionammProgram: Address<TAccountFusionammProgram>;
  fusionPool: Address<TAccountFusionPool>;
  fusionPosition: Address<TAccountFusionPosition>;
  memoProgram: Address<TAccountMemoProgram>;
  withdrawPercent: RemoveLiquidityFusionInstructionDataArgs['withdrawPercent'];
  swapToToken: RemoveLiquidityFusionInstructionDataArgs['swapToToken'];
  minRemovedAmountA: RemoveLiquidityFusionInstructionDataArgs['minRemovedAmountA'];
  minRemovedAmountB: RemoveLiquidityFusionInstructionDataArgs['minRemovedAmountB'];
  maxSwapSlippage: RemoveLiquidityFusionInstructionDataArgs['maxSwapSlippage'];
  remainingAccountsInfo: RemoveLiquidityFusionInstructionDataArgs['remainingAccountsInfo'];
};

export function getRemoveLiquidityFusionInstruction<
  TAccountAuthority extends string,
  TAccountTunaConfig extends string,
  TAccountMarket extends string,
  TAccountMintA extends string,
  TAccountMintB extends string,
  TAccountTokenProgramA extends string,
  TAccountTokenProgramB extends string,
  TAccountVaultA extends string,
  TAccountVaultB extends string,
  TAccountVaultAAta extends string,
  TAccountVaultBAta extends string,
  TAccountTunaPosition extends string,
  TAccountTunaPositionAta extends string,
  TAccountTunaPositionAtaA extends string,
  TAccountTunaPositionAtaB extends string,
  TAccountTunaPositionOwnerAtaA extends string,
  TAccountTunaPositionOwnerAtaB extends string,
  TAccountPythOraclePriceFeedA extends string,
  TAccountPythOraclePriceFeedB extends string,
  TAccountFusionammProgram extends string,
  TAccountFusionPool extends string,
  TAccountFusionPosition extends string,
  TAccountMemoProgram extends string,
  TProgramAddress extends Address = typeof TUNA_PROGRAM_ADDRESS,
>(
  input: RemoveLiquidityFusionInput<
    TAccountAuthority,
    TAccountTunaConfig,
    TAccountMarket,
    TAccountMintA,
    TAccountMintB,
    TAccountTokenProgramA,
    TAccountTokenProgramB,
    TAccountVaultA,
    TAccountVaultB,
    TAccountVaultAAta,
    TAccountVaultBAta,
    TAccountTunaPosition,
    TAccountTunaPositionAta,
    TAccountTunaPositionAtaA,
    TAccountTunaPositionAtaB,
    TAccountTunaPositionOwnerAtaA,
    TAccountTunaPositionOwnerAtaB,
    TAccountPythOraclePriceFeedA,
    TAccountPythOraclePriceFeedB,
    TAccountFusionammProgram,
    TAccountFusionPool,
    TAccountFusionPosition,
    TAccountMemoProgram
  >,
  config?: { programAddress?: TProgramAddress }
): RemoveLiquidityFusionInstruction<
  TProgramAddress,
  TAccountAuthority,
  TAccountTunaConfig,
  TAccountMarket,
  TAccountMintA,
  TAccountMintB,
  TAccountTokenProgramA,
  TAccountTokenProgramB,
  TAccountVaultA,
  TAccountVaultB,
  TAccountVaultAAta,
  TAccountVaultBAta,
  TAccountTunaPosition,
  TAccountTunaPositionAta,
  TAccountTunaPositionAtaA,
  TAccountTunaPositionAtaB,
  TAccountTunaPositionOwnerAtaA,
  TAccountTunaPositionOwnerAtaB,
  TAccountPythOraclePriceFeedA,
  TAccountPythOraclePriceFeedB,
  TAccountFusionammProgram,
  TAccountFusionPool,
  TAccountFusionPosition,
  TAccountMemoProgram
> {
  // Program address.
  const programAddress = config?.programAddress ?? TUNA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    authority: { value: input.authority ?? null, isWritable: true },
    tunaConfig: { value: input.tunaConfig ?? null, isWritable: false },
    market: { value: input.market ?? null, isWritable: true },
    mintA: { value: input.mintA ?? null, isWritable: false },
    mintB: { value: input.mintB ?? null, isWritable: false },
    tokenProgramA: { value: input.tokenProgramA ?? null, isWritable: false },
    tokenProgramB: { value: input.tokenProgramB ?? null, isWritable: false },
    vaultA: { value: input.vaultA ?? null, isWritable: true },
    vaultB: { value: input.vaultB ?? null, isWritable: true },
    vaultAAta: { value: input.vaultAAta ?? null, isWritable: true },
    vaultBAta: { value: input.vaultBAta ?? null, isWritable: true },
    tunaPosition: { value: input.tunaPosition ?? null, isWritable: true },
    tunaPositionAta: { value: input.tunaPositionAta ?? null, isWritable: true },
    tunaPositionAtaA: {
      value: input.tunaPositionAtaA ?? null,
      isWritable: true,
    },
    tunaPositionAtaB: {
      value: input.tunaPositionAtaB ?? null,
      isWritable: true,
    },
    tunaPositionOwnerAtaA: {
      value: input.tunaPositionOwnerAtaA ?? null,
      isWritable: true,
    },
    tunaPositionOwnerAtaB: {
      value: input.tunaPositionOwnerAtaB ?? null,
      isWritable: true,
    },
    pythOraclePriceFeedA: {
      value: input.pythOraclePriceFeedA ?? null,
      isWritable: false,
    },
    pythOraclePriceFeedB: {
      value: input.pythOraclePriceFeedB ?? null,
      isWritable: false,
    },
    fusionammProgram: {
      value: input.fusionammProgram ?? null,
      isWritable: false,
    },
    fusionPool: { value: input.fusionPool ?? null, isWritable: true },
    fusionPosition: { value: input.fusionPosition ?? null, isWritable: true },
    memoProgram: { value: input.memoProgram ?? null, isWritable: false },
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
      getAccountMeta(accounts.market),
      getAccountMeta(accounts.mintA),
      getAccountMeta(accounts.mintB),
      getAccountMeta(accounts.tokenProgramA),
      getAccountMeta(accounts.tokenProgramB),
      getAccountMeta(accounts.vaultA),
      getAccountMeta(accounts.vaultB),
      getAccountMeta(accounts.vaultAAta),
      getAccountMeta(accounts.vaultBAta),
      getAccountMeta(accounts.tunaPosition),
      getAccountMeta(accounts.tunaPositionAta),
      getAccountMeta(accounts.tunaPositionAtaA),
      getAccountMeta(accounts.tunaPositionAtaB),
      getAccountMeta(accounts.tunaPositionOwnerAtaA),
      getAccountMeta(accounts.tunaPositionOwnerAtaB),
      getAccountMeta(accounts.pythOraclePriceFeedA),
      getAccountMeta(accounts.pythOraclePriceFeedB),
      getAccountMeta(accounts.fusionammProgram),
      getAccountMeta(accounts.fusionPool),
      getAccountMeta(accounts.fusionPosition),
      getAccountMeta(accounts.memoProgram),
    ],
    programAddress,
    data: getRemoveLiquidityFusionInstructionDataEncoder().encode(
      args as RemoveLiquidityFusionInstructionDataArgs
    ),
  } as RemoveLiquidityFusionInstruction<
    TProgramAddress,
    TAccountAuthority,
    TAccountTunaConfig,
    TAccountMarket,
    TAccountMintA,
    TAccountMintB,
    TAccountTokenProgramA,
    TAccountTokenProgramB,
    TAccountVaultA,
    TAccountVaultB,
    TAccountVaultAAta,
    TAccountVaultBAta,
    TAccountTunaPosition,
    TAccountTunaPositionAta,
    TAccountTunaPositionAtaA,
    TAccountTunaPositionAtaB,
    TAccountTunaPositionOwnerAtaA,
    TAccountTunaPositionOwnerAtaB,
    TAccountPythOraclePriceFeedA,
    TAccountPythOraclePriceFeedB,
    TAccountFusionammProgram,
    TAccountFusionPool,
    TAccountFusionPosition,
    TAccountMemoProgram
  >;

  return instruction;
}

export type ParsedRemoveLiquidityFusionInstruction<
  TProgram extends string = typeof TUNA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /**
     *
     * TUNA accounts
     *
     */

    authority: TAccountMetas[0];
    tunaConfig: TAccountMetas[1];
    market: TAccountMetas[2];
    mintA: TAccountMetas[3];
    mintB: TAccountMetas[4];
    tokenProgramA: TAccountMetas[5];
    tokenProgramB: TAccountMetas[6];
    vaultA: TAccountMetas[7];
    vaultB: TAccountMetas[8];
    vaultAAta: TAccountMetas[9];
    vaultBAta: TAccountMetas[10];
    tunaPosition: TAccountMetas[11];
    tunaPositionAta: TAccountMetas[12];
    tunaPositionAtaA: TAccountMetas[13];
    tunaPositionAtaB: TAccountMetas[14];
    tunaPositionOwnerAtaA: TAccountMetas[15];
    tunaPositionOwnerAtaB: TAccountMetas[16];
    pythOraclePriceFeedA: TAccountMetas[17];
    pythOraclePriceFeedB: TAccountMetas[18];
    /**
     *
     * Fusion accounts
     *
     */

    fusionammProgram: TAccountMetas[19];
    fusionPool: TAccountMetas[20];
    fusionPosition: TAccountMetas[21];
    memoProgram: TAccountMetas[22];
  };
  data: RemoveLiquidityFusionInstructionData;
};

export function parseRemoveLiquidityFusionInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedRemoveLiquidityFusionInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 23) {
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
      market: getNextAccount(),
      mintA: getNextAccount(),
      mintB: getNextAccount(),
      tokenProgramA: getNextAccount(),
      tokenProgramB: getNextAccount(),
      vaultA: getNextAccount(),
      vaultB: getNextAccount(),
      vaultAAta: getNextAccount(),
      vaultBAta: getNextAccount(),
      tunaPosition: getNextAccount(),
      tunaPositionAta: getNextAccount(),
      tunaPositionAtaA: getNextAccount(),
      tunaPositionAtaB: getNextAccount(),
      tunaPositionOwnerAtaA: getNextAccount(),
      tunaPositionOwnerAtaB: getNextAccount(),
      pythOraclePriceFeedA: getNextAccount(),
      pythOraclePriceFeedB: getNextAccount(),
      fusionammProgram: getNextAccount(),
      fusionPool: getNextAccount(),
      fusionPosition: getNextAccount(),
      memoProgram: getNextAccount(),
    },
    data: getRemoveLiquidityFusionInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
