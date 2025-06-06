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
  getI32Decoder,
  getI32Encoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
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

export const OPEN_POSITION_ORCA_DISCRIMINATOR = new Uint8Array([
  201, 85, 45, 226, 182, 208, 246, 115,
]);

export function getOpenPositionOrcaDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    OPEN_POSITION_ORCA_DISCRIMINATOR
  );
}

export type OpenPositionOrcaInstruction<
  TProgram extends string = typeof TUNA_PROGRAM_ADDRESS,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountMintA extends string | IAccountMeta<string> = string,
  TAccountMintB extends string | IAccountMeta<string> = string,
  TAccountMarket extends string | IAccountMeta<string> = string,
  TAccountTunaPosition extends string | IAccountMeta<string> = string,
  TAccountTunaPositionMint extends string | IAccountMeta<string> = string,
  TAccountTunaPositionAta extends string | IAccountMeta<string> = string,
  TAccountTunaPositionAtaA extends string | IAccountMeta<string> = string,
  TAccountTunaPositionAtaB extends string | IAccountMeta<string> = string,
  TAccountWhirlpoolProgram extends string | IAccountMeta<string> = string,
  TAccountWhirlpool extends string | IAccountMeta<string> = string,
  TAccountOrcaPosition extends string | IAccountMeta<string> = string,
  TAccountMetadataUpdateAuth extends string | IAccountMeta<string> = string,
  TAccountTokenProgramA extends string | IAccountMeta<string> = string,
  TAccountTokenProgramB extends string | IAccountMeta<string> = string,
  TAccountToken2022Program extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountAssociatedTokenProgram extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAuthority extends string
        ? WritableSignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountMintA extends string
        ? ReadonlyAccount<TAccountMintA>
        : TAccountMintA,
      TAccountMintB extends string
        ? ReadonlyAccount<TAccountMintB>
        : TAccountMintB,
      TAccountMarket extends string
        ? ReadonlyAccount<TAccountMarket>
        : TAccountMarket,
      TAccountTunaPosition extends string
        ? WritableAccount<TAccountTunaPosition>
        : TAccountTunaPosition,
      TAccountTunaPositionMint extends string
        ? WritableSignerAccount<TAccountTunaPositionMint> &
            IAccountSignerMeta<TAccountTunaPositionMint>
        : TAccountTunaPositionMint,
      TAccountTunaPositionAta extends string
        ? WritableAccount<TAccountTunaPositionAta>
        : TAccountTunaPositionAta,
      TAccountTunaPositionAtaA extends string
        ? WritableAccount<TAccountTunaPositionAtaA>
        : TAccountTunaPositionAtaA,
      TAccountTunaPositionAtaB extends string
        ? WritableAccount<TAccountTunaPositionAtaB>
        : TAccountTunaPositionAtaB,
      TAccountWhirlpoolProgram extends string
        ? ReadonlyAccount<TAccountWhirlpoolProgram>
        : TAccountWhirlpoolProgram,
      TAccountWhirlpool extends string
        ? ReadonlyAccount<TAccountWhirlpool>
        : TAccountWhirlpool,
      TAccountOrcaPosition extends string
        ? WritableAccount<TAccountOrcaPosition>
        : TAccountOrcaPosition,
      TAccountMetadataUpdateAuth extends string
        ? ReadonlyAccount<TAccountMetadataUpdateAuth>
        : TAccountMetadataUpdateAuth,
      TAccountTokenProgramA extends string
        ? ReadonlyAccount<TAccountTokenProgramA>
        : TAccountTokenProgramA,
      TAccountTokenProgramB extends string
        ? ReadonlyAccount<TAccountTokenProgramB>
        : TAccountTokenProgramB,
      TAccountToken2022Program extends string
        ? ReadonlyAccount<TAccountToken2022Program>
        : TAccountToken2022Program,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      ...TRemainingAccounts,
    ]
  >;

export type OpenPositionOrcaInstructionData = {
  discriminator: ReadonlyUint8Array;
  tickLowerIndex: number;
  tickUpperIndex: number;
  tickStopLossIndex: number;
  tickTakeProfitIndex: number;
  flags: number;
};

export type OpenPositionOrcaInstructionDataArgs = {
  tickLowerIndex: number;
  tickUpperIndex: number;
  tickStopLossIndex: number;
  tickTakeProfitIndex: number;
  flags: number;
};

export function getOpenPositionOrcaInstructionDataEncoder(): Encoder<OpenPositionOrcaInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['tickLowerIndex', getI32Encoder()],
      ['tickUpperIndex', getI32Encoder()],
      ['tickStopLossIndex', getI32Encoder()],
      ['tickTakeProfitIndex', getI32Encoder()],
      ['flags', getU32Encoder()],
    ]),
    (value) => ({ ...value, discriminator: OPEN_POSITION_ORCA_DISCRIMINATOR })
  );
}

export function getOpenPositionOrcaInstructionDataDecoder(): Decoder<OpenPositionOrcaInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['tickLowerIndex', getI32Decoder()],
    ['tickUpperIndex', getI32Decoder()],
    ['tickStopLossIndex', getI32Decoder()],
    ['tickTakeProfitIndex', getI32Decoder()],
    ['flags', getU32Decoder()],
  ]);
}

export function getOpenPositionOrcaInstructionDataCodec(): Codec<
  OpenPositionOrcaInstructionDataArgs,
  OpenPositionOrcaInstructionData
> {
  return combineCodec(
    getOpenPositionOrcaInstructionDataEncoder(),
    getOpenPositionOrcaInstructionDataDecoder()
  );
}

export type OpenPositionOrcaInput<
  TAccountAuthority extends string = string,
  TAccountMintA extends string = string,
  TAccountMintB extends string = string,
  TAccountMarket extends string = string,
  TAccountTunaPosition extends string = string,
  TAccountTunaPositionMint extends string = string,
  TAccountTunaPositionAta extends string = string,
  TAccountTunaPositionAtaA extends string = string,
  TAccountTunaPositionAtaB extends string = string,
  TAccountWhirlpoolProgram extends string = string,
  TAccountWhirlpool extends string = string,
  TAccountOrcaPosition extends string = string,
  TAccountMetadataUpdateAuth extends string = string,
  TAccountTokenProgramA extends string = string,
  TAccountTokenProgramB extends string = string,
  TAccountToken2022Program extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
> = {
  /**
   *
   * TUNA accounts
   *
   */
  authority: TransactionSigner<TAccountAuthority>;
  mintA: Address<TAccountMintA>;
  mintB: Address<TAccountMintB>;
  market: Address<TAccountMarket>;
  tunaPosition: Address<TAccountTunaPosition>;
  tunaPositionMint: TransactionSigner<TAccountTunaPositionMint>;
  tunaPositionAta: Address<TAccountTunaPositionAta>;
  tunaPositionAtaA: Address<TAccountTunaPositionAtaA>;
  tunaPositionAtaB: Address<TAccountTunaPositionAtaB>;
  /**
   *
   * ORCA accounts
   *
   */
  whirlpoolProgram: Address<TAccountWhirlpoolProgram>;
  whirlpool: Address<TAccountWhirlpool>;
  orcaPosition: Address<TAccountOrcaPosition>;
  metadataUpdateAuth: Address<TAccountMetadataUpdateAuth>;
  tokenProgramA: Address<TAccountTokenProgramA>;
  tokenProgramB: Address<TAccountTokenProgramB>;
  /**
   *
   * Other accounts
   *
   */
  token2022Program: Address<TAccountToken2022Program>;
  systemProgram?: Address<TAccountSystemProgram>;
  associatedTokenProgram: Address<TAccountAssociatedTokenProgram>;
  tickLowerIndex: OpenPositionOrcaInstructionDataArgs['tickLowerIndex'];
  tickUpperIndex: OpenPositionOrcaInstructionDataArgs['tickUpperIndex'];
  tickStopLossIndex: OpenPositionOrcaInstructionDataArgs['tickStopLossIndex'];
  tickTakeProfitIndex: OpenPositionOrcaInstructionDataArgs['tickTakeProfitIndex'];
  flags: OpenPositionOrcaInstructionDataArgs['flags'];
};

export function getOpenPositionOrcaInstruction<
  TAccountAuthority extends string,
  TAccountMintA extends string,
  TAccountMintB extends string,
  TAccountMarket extends string,
  TAccountTunaPosition extends string,
  TAccountTunaPositionMint extends string,
  TAccountTunaPositionAta extends string,
  TAccountTunaPositionAtaA extends string,
  TAccountTunaPositionAtaB extends string,
  TAccountWhirlpoolProgram extends string,
  TAccountWhirlpool extends string,
  TAccountOrcaPosition extends string,
  TAccountMetadataUpdateAuth extends string,
  TAccountTokenProgramA extends string,
  TAccountTokenProgramB extends string,
  TAccountToken2022Program extends string,
  TAccountSystemProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TProgramAddress extends Address = typeof TUNA_PROGRAM_ADDRESS,
>(
  input: OpenPositionOrcaInput<
    TAccountAuthority,
    TAccountMintA,
    TAccountMintB,
    TAccountMarket,
    TAccountTunaPosition,
    TAccountTunaPositionMint,
    TAccountTunaPositionAta,
    TAccountTunaPositionAtaA,
    TAccountTunaPositionAtaB,
    TAccountWhirlpoolProgram,
    TAccountWhirlpool,
    TAccountOrcaPosition,
    TAccountMetadataUpdateAuth,
    TAccountTokenProgramA,
    TAccountTokenProgramB,
    TAccountToken2022Program,
    TAccountSystemProgram,
    TAccountAssociatedTokenProgram
  >,
  config?: { programAddress?: TProgramAddress }
): OpenPositionOrcaInstruction<
  TProgramAddress,
  TAccountAuthority,
  TAccountMintA,
  TAccountMintB,
  TAccountMarket,
  TAccountTunaPosition,
  TAccountTunaPositionMint,
  TAccountTunaPositionAta,
  TAccountTunaPositionAtaA,
  TAccountTunaPositionAtaB,
  TAccountWhirlpoolProgram,
  TAccountWhirlpool,
  TAccountOrcaPosition,
  TAccountMetadataUpdateAuth,
  TAccountTokenProgramA,
  TAccountTokenProgramB,
  TAccountToken2022Program,
  TAccountSystemProgram,
  TAccountAssociatedTokenProgram
> {
  // Program address.
  const programAddress = config?.programAddress ?? TUNA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    authority: { value: input.authority ?? null, isWritable: true },
    mintA: { value: input.mintA ?? null, isWritable: false },
    mintB: { value: input.mintB ?? null, isWritable: false },
    market: { value: input.market ?? null, isWritable: false },
    tunaPosition: { value: input.tunaPosition ?? null, isWritable: true },
    tunaPositionMint: {
      value: input.tunaPositionMint ?? null,
      isWritable: true,
    },
    tunaPositionAta: { value: input.tunaPositionAta ?? null, isWritable: true },
    tunaPositionAtaA: {
      value: input.tunaPositionAtaA ?? null,
      isWritable: true,
    },
    tunaPositionAtaB: {
      value: input.tunaPositionAtaB ?? null,
      isWritable: true,
    },
    whirlpoolProgram: {
      value: input.whirlpoolProgram ?? null,
      isWritable: false,
    },
    whirlpool: { value: input.whirlpool ?? null, isWritable: false },
    orcaPosition: { value: input.orcaPosition ?? null, isWritable: true },
    metadataUpdateAuth: {
      value: input.metadataUpdateAuth ?? null,
      isWritable: false,
    },
    tokenProgramA: { value: input.tokenProgramA ?? null, isWritable: false },
    tokenProgramB: { value: input.tokenProgramB ?? null, isWritable: false },
    token2022Program: {
      value: input.token2022Program ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.mintA),
      getAccountMeta(accounts.mintB),
      getAccountMeta(accounts.market),
      getAccountMeta(accounts.tunaPosition),
      getAccountMeta(accounts.tunaPositionMint),
      getAccountMeta(accounts.tunaPositionAta),
      getAccountMeta(accounts.tunaPositionAtaA),
      getAccountMeta(accounts.tunaPositionAtaB),
      getAccountMeta(accounts.whirlpoolProgram),
      getAccountMeta(accounts.whirlpool),
      getAccountMeta(accounts.orcaPosition),
      getAccountMeta(accounts.metadataUpdateAuth),
      getAccountMeta(accounts.tokenProgramA),
      getAccountMeta(accounts.tokenProgramB),
      getAccountMeta(accounts.token2022Program),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.associatedTokenProgram),
    ],
    programAddress,
    data: getOpenPositionOrcaInstructionDataEncoder().encode(
      args as OpenPositionOrcaInstructionDataArgs
    ),
  } as OpenPositionOrcaInstruction<
    TProgramAddress,
    TAccountAuthority,
    TAccountMintA,
    TAccountMintB,
    TAccountMarket,
    TAccountTunaPosition,
    TAccountTunaPositionMint,
    TAccountTunaPositionAta,
    TAccountTunaPositionAtaA,
    TAccountTunaPositionAtaB,
    TAccountWhirlpoolProgram,
    TAccountWhirlpool,
    TAccountOrcaPosition,
    TAccountMetadataUpdateAuth,
    TAccountTokenProgramA,
    TAccountTokenProgramB,
    TAccountToken2022Program,
    TAccountSystemProgram,
    TAccountAssociatedTokenProgram
  >;

  return instruction;
}

export type ParsedOpenPositionOrcaInstruction<
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
    mintA: TAccountMetas[1];
    mintB: TAccountMetas[2];
    market: TAccountMetas[3];
    tunaPosition: TAccountMetas[4];
    tunaPositionMint: TAccountMetas[5];
    tunaPositionAta: TAccountMetas[6];
    tunaPositionAtaA: TAccountMetas[7];
    tunaPositionAtaB: TAccountMetas[8];
    /**
     *
     * ORCA accounts
     *
     */

    whirlpoolProgram: TAccountMetas[9];
    whirlpool: TAccountMetas[10];
    orcaPosition: TAccountMetas[11];
    metadataUpdateAuth: TAccountMetas[12];
    tokenProgramA: TAccountMetas[13];
    tokenProgramB: TAccountMetas[14];
    /**
     *
     * Other accounts
     *
     */

    token2022Program: TAccountMetas[15];
    systemProgram: TAccountMetas[16];
    associatedTokenProgram: TAccountMetas[17];
  };
  data: OpenPositionOrcaInstructionData;
};

export function parseOpenPositionOrcaInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedOpenPositionOrcaInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 18) {
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
      mintA: getNextAccount(),
      mintB: getNextAccount(),
      market: getNextAccount(),
      tunaPosition: getNextAccount(),
      tunaPositionMint: getNextAccount(),
      tunaPositionAta: getNextAccount(),
      tunaPositionAtaA: getNextAccount(),
      tunaPositionAtaB: getNextAccount(),
      whirlpoolProgram: getNextAccount(),
      whirlpool: getNextAccount(),
      orcaPosition: getNextAccount(),
      metadataUpdateAuth: getNextAccount(),
      tokenProgramA: getNextAccount(),
      tokenProgramB: getNextAccount(),
      token2022Program: getNextAccount(),
      systemProgram: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
    },
    data: getOpenPositionOrcaInstructionDataDecoder().decode(instruction.data),
  };
}
