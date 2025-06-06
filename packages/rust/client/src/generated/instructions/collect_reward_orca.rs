//! This code was AUTOGENERATED using the codama library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun codama to update it.
//!
//! <https://github.com/codama-idl/codama>
//!

use borsh::BorshSerialize;
use borsh::BorshDeserialize;

/// Accounts.
#[derive(Debug)]
pub struct CollectRewardOrca {
            /// 
/// TUNA accounts
/// 

    
              
          pub authority: solana_program::pubkey::Pubkey,
          
              
          pub tuna_config: solana_program::pubkey::Pubkey,
          
              
          pub reward_mint: solana_program::pubkey::Pubkey,
          
              
          pub reward_token_program: solana_program::pubkey::Pubkey,
          
              
          pub tuna_position: solana_program::pubkey::Pubkey,
          
              
          pub tuna_position_ata: solana_program::pubkey::Pubkey,
          
              
          pub tuna_position_owner_reward_ata: solana_program::pubkey::Pubkey,
                /// 
/// ORCA accounts
/// 

    
              
          pub whirlpool_program: solana_program::pubkey::Pubkey,
          
              
          pub whirlpool: solana_program::pubkey::Pubkey,
          
              
          pub orca_position: solana_program::pubkey::Pubkey,
          
              
          pub reward_vault: solana_program::pubkey::Pubkey,
          
              
          pub tick_array_lower: solana_program::pubkey::Pubkey,
          
              
          pub tick_array_upper: solana_program::pubkey::Pubkey,
          
              
          pub memo_program: solana_program::pubkey::Pubkey,
      }

impl CollectRewardOrca {
  pub fn instruction(&self, args: CollectRewardOrcaInstructionArgs) -> solana_program::instruction::Instruction {
    self.instruction_with_remaining_accounts(args, &[])
  }
  #[allow(clippy::arithmetic_side_effects)]
  #[allow(clippy::vec_init_then_push)]
  pub fn instruction_with_remaining_accounts(&self, args: CollectRewardOrcaInstructionArgs, remaining_accounts: &[solana_program::instruction::AccountMeta]) -> solana_program::instruction::Instruction {
    let mut accounts = Vec::with_capacity(14+ remaining_accounts.len());
                            accounts.push(solana_program::instruction::AccountMeta::new(
            self.authority,
            true
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.tuna_config,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.reward_mint,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.reward_token_program,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            self.tuna_position,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.tuna_position_ata,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            self.tuna_position_owner_reward_ata,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.whirlpool_program,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.whirlpool,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            self.orca_position,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            self.reward_vault,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            self.tick_array_lower,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            self.tick_array_upper,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.memo_program,
            false
          ));
                      accounts.extend_from_slice(remaining_accounts);
    let mut data = borsh::to_vec(&CollectRewardOrcaInstructionData::new()).unwrap();
          let mut args = borsh::to_vec(&args).unwrap();
      data.append(&mut args);
    
    solana_program::instruction::Instruction {
      program_id: crate::TUNA_ID,
      accounts,
      data,
    }
  }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
 pub struct CollectRewardOrcaInstructionData {
            discriminator: [u8; 8],
            }

impl CollectRewardOrcaInstructionData {
  pub fn new() -> Self {
    Self {
                        discriminator: [99, 253, 84, 63, 250, 243, 165, 191],
                                }
  }
}

impl Default for CollectRewardOrcaInstructionData {
  fn default() -> Self {
    Self::new()
  }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
 pub struct CollectRewardOrcaInstructionArgs {
                  pub reward_index: u8,
      }


/// Instruction builder for `CollectRewardOrca`.
///
/// ### Accounts:
///
                      ///   0. `[writable, signer]` authority
          ///   1. `[]` tuna_config
          ///   2. `[]` reward_mint
          ///   3. `[]` reward_token_program
                ///   4. `[writable]` tuna_position
          ///   5. `[]` tuna_position_ata
                ///   6. `[writable]` tuna_position_owner_reward_ata
          ///   7. `[]` whirlpool_program
          ///   8. `[]` whirlpool
                ///   9. `[writable]` orca_position
                ///   10. `[writable]` reward_vault
                ///   11. `[writable]` tick_array_lower
                ///   12. `[writable]` tick_array_upper
          ///   13. `[]` memo_program
#[derive(Clone, Debug, Default)]
pub struct CollectRewardOrcaBuilder {
            authority: Option<solana_program::pubkey::Pubkey>,
                tuna_config: Option<solana_program::pubkey::Pubkey>,
                reward_mint: Option<solana_program::pubkey::Pubkey>,
                reward_token_program: Option<solana_program::pubkey::Pubkey>,
                tuna_position: Option<solana_program::pubkey::Pubkey>,
                tuna_position_ata: Option<solana_program::pubkey::Pubkey>,
                tuna_position_owner_reward_ata: Option<solana_program::pubkey::Pubkey>,
                whirlpool_program: Option<solana_program::pubkey::Pubkey>,
                whirlpool: Option<solana_program::pubkey::Pubkey>,
                orca_position: Option<solana_program::pubkey::Pubkey>,
                reward_vault: Option<solana_program::pubkey::Pubkey>,
                tick_array_lower: Option<solana_program::pubkey::Pubkey>,
                tick_array_upper: Option<solana_program::pubkey::Pubkey>,
                memo_program: Option<solana_program::pubkey::Pubkey>,
                        reward_index: Option<u8>,
        __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl CollectRewardOrcaBuilder {
  pub fn new() -> Self {
    Self::default()
  }
            /// 
/// TUNA accounts
/// 
#[inline(always)]
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.authority = Some(authority);
                    self
    }
            #[inline(always)]
    pub fn tuna_config(&mut self, tuna_config: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.tuna_config = Some(tuna_config);
                    self
    }
            #[inline(always)]
    pub fn reward_mint(&mut self, reward_mint: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.reward_mint = Some(reward_mint);
                    self
    }
            #[inline(always)]
    pub fn reward_token_program(&mut self, reward_token_program: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.reward_token_program = Some(reward_token_program);
                    self
    }
            #[inline(always)]
    pub fn tuna_position(&mut self, tuna_position: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.tuna_position = Some(tuna_position);
                    self
    }
            #[inline(always)]
    pub fn tuna_position_ata(&mut self, tuna_position_ata: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.tuna_position_ata = Some(tuna_position_ata);
                    self
    }
            #[inline(always)]
    pub fn tuna_position_owner_reward_ata(&mut self, tuna_position_owner_reward_ata: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.tuna_position_owner_reward_ata = Some(tuna_position_owner_reward_ata);
                    self
    }
            /// 
/// ORCA accounts
/// 
#[inline(always)]
    pub fn whirlpool_program(&mut self, whirlpool_program: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.whirlpool_program = Some(whirlpool_program);
                    self
    }
            #[inline(always)]
    pub fn whirlpool(&mut self, whirlpool: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.whirlpool = Some(whirlpool);
                    self
    }
            #[inline(always)]
    pub fn orca_position(&mut self, orca_position: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.orca_position = Some(orca_position);
                    self
    }
            #[inline(always)]
    pub fn reward_vault(&mut self, reward_vault: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.reward_vault = Some(reward_vault);
                    self
    }
            #[inline(always)]
    pub fn tick_array_lower(&mut self, tick_array_lower: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.tick_array_lower = Some(tick_array_lower);
                    self
    }
            #[inline(always)]
    pub fn tick_array_upper(&mut self, tick_array_upper: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.tick_array_upper = Some(tick_array_upper);
                    self
    }
            #[inline(always)]
    pub fn memo_program(&mut self, memo_program: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.memo_program = Some(memo_program);
                    self
    }
                    #[inline(always)]
      pub fn reward_index(&mut self, reward_index: u8) -> &mut Self {
        self.reward_index = Some(reward_index);
        self
      }
        /// Add an additional account to the instruction.
  #[inline(always)]
  pub fn add_remaining_account(&mut self, account: solana_program::instruction::AccountMeta) -> &mut Self {
    self.__remaining_accounts.push(account);
    self
  }
  /// Add additional accounts to the instruction.
  #[inline(always)]
  pub fn add_remaining_accounts(&mut self, accounts: &[solana_program::instruction::AccountMeta]) -> &mut Self {
    self.__remaining_accounts.extend_from_slice(accounts);
    self
  }
  #[allow(clippy::clone_on_copy)]
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
    let accounts = CollectRewardOrca {
                              authority: self.authority.expect("authority is not set"),
                                        tuna_config: self.tuna_config.expect("tuna_config is not set"),
                                        reward_mint: self.reward_mint.expect("reward_mint is not set"),
                                        reward_token_program: self.reward_token_program.expect("reward_token_program is not set"),
                                        tuna_position: self.tuna_position.expect("tuna_position is not set"),
                                        tuna_position_ata: self.tuna_position_ata.expect("tuna_position_ata is not set"),
                                        tuna_position_owner_reward_ata: self.tuna_position_owner_reward_ata.expect("tuna_position_owner_reward_ata is not set"),
                                        whirlpool_program: self.whirlpool_program.expect("whirlpool_program is not set"),
                                        whirlpool: self.whirlpool.expect("whirlpool is not set"),
                                        orca_position: self.orca_position.expect("orca_position is not set"),
                                        reward_vault: self.reward_vault.expect("reward_vault is not set"),
                                        tick_array_lower: self.tick_array_lower.expect("tick_array_lower is not set"),
                                        tick_array_upper: self.tick_array_upper.expect("tick_array_upper is not set"),
                                        memo_program: self.memo_program.expect("memo_program is not set"),
                      };
          let args = CollectRewardOrcaInstructionArgs {
                                                              reward_index: self.reward_index.clone().expect("reward_index is not set"),
                                    };
    
    accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
  }
}

  /// `collect_reward_orca` CPI accounts.
  pub struct CollectRewardOrcaCpiAccounts<'a, 'b> {
                  /// 
/// TUNA accounts
/// 

      
                    
              pub authority: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub tuna_config: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub reward_mint: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub reward_token_program: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub tuna_position: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub tuna_position_ata: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub tuna_position_owner_reward_ata: &'b solana_program::account_info::AccountInfo<'a>,
                        /// 
/// ORCA accounts
/// 

      
                    
              pub whirlpool_program: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub whirlpool: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub orca_position: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub reward_vault: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub tick_array_lower: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub tick_array_upper: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub memo_program: &'b solana_program::account_info::AccountInfo<'a>,
            }

/// `collect_reward_orca` CPI instruction.
pub struct CollectRewardOrcaCpi<'a, 'b> {
  /// The program to invoke.
  pub __program: &'b solana_program::account_info::AccountInfo<'a>,
            /// 
/// TUNA accounts
/// 

    
              
          pub authority: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub tuna_config: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub reward_mint: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub reward_token_program: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub tuna_position: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub tuna_position_ata: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub tuna_position_owner_reward_ata: &'b solana_program::account_info::AccountInfo<'a>,
                /// 
/// ORCA accounts
/// 

    
              
          pub whirlpool_program: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub whirlpool: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub orca_position: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub reward_vault: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub tick_array_lower: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub tick_array_upper: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub memo_program: &'b solana_program::account_info::AccountInfo<'a>,
            /// The arguments for the instruction.
    pub __args: CollectRewardOrcaInstructionArgs,
  }

impl<'a, 'b> CollectRewardOrcaCpi<'a, 'b> {
  pub fn new(
    program: &'b solana_program::account_info::AccountInfo<'a>,
          accounts: CollectRewardOrcaCpiAccounts<'a, 'b>,
              args: CollectRewardOrcaInstructionArgs,
      ) -> Self {
    Self {
      __program: program,
              authority: accounts.authority,
              tuna_config: accounts.tuna_config,
              reward_mint: accounts.reward_mint,
              reward_token_program: accounts.reward_token_program,
              tuna_position: accounts.tuna_position,
              tuna_position_ata: accounts.tuna_position_ata,
              tuna_position_owner_reward_ata: accounts.tuna_position_owner_reward_ata,
              whirlpool_program: accounts.whirlpool_program,
              whirlpool: accounts.whirlpool,
              orca_position: accounts.orca_position,
              reward_vault: accounts.reward_vault,
              tick_array_lower: accounts.tick_array_lower,
              tick_array_upper: accounts.tick_array_upper,
              memo_program: accounts.memo_program,
                    __args: args,
          }
  }
  #[inline(always)]
  pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
    self.invoke_signed_with_remaining_accounts(&[], &[])
  }
  #[inline(always)]
  pub fn invoke_with_remaining_accounts(&self, remaining_accounts: &[(&'b solana_program::account_info::AccountInfo<'a>, bool, bool)]) -> solana_program::entrypoint::ProgramResult {
    self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
  }
  #[inline(always)]
  pub fn invoke_signed(&self, signers_seeds: &[&[&[u8]]]) -> solana_program::entrypoint::ProgramResult {
    self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
  }
  #[allow(clippy::arithmetic_side_effects)]
  #[allow(clippy::clone_on_copy)]
  #[allow(clippy::vec_init_then_push)]
  pub fn invoke_signed_with_remaining_accounts(
    &self,
    signers_seeds: &[&[&[u8]]],
    remaining_accounts: &[(&'b solana_program::account_info::AccountInfo<'a>, bool, bool)]
  ) -> solana_program::entrypoint::ProgramResult {
    let mut accounts = Vec::with_capacity(14+ remaining_accounts.len());
                            accounts.push(solana_program::instruction::AccountMeta::new(
            *self.authority.key,
            true
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.tuna_config.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.reward_mint.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.reward_token_program.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            *self.tuna_position.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.tuna_position_ata.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            *self.tuna_position_owner_reward_ata.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.whirlpool_program.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.whirlpool.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            *self.orca_position.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            *self.reward_vault.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            *self.tick_array_lower.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            *self.tick_array_upper.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.memo_program.key,
            false
          ));
                      remaining_accounts.iter().for_each(|remaining_account| {
      accounts.push(solana_program::instruction::AccountMeta {
          pubkey: *remaining_account.0.key,
          is_signer: remaining_account.1,
          is_writable: remaining_account.2,
      })
    });
    let mut data = borsh::to_vec(&CollectRewardOrcaInstructionData::new()).unwrap();
          let mut args = borsh::to_vec(&self.__args).unwrap();
      data.append(&mut args);
    
    let instruction = solana_program::instruction::Instruction {
      program_id: crate::TUNA_ID,
      accounts,
      data,
    };
    let mut account_infos = Vec::with_capacity(15 + remaining_accounts.len());
    account_infos.push(self.__program.clone());
                  account_infos.push(self.authority.clone());
                        account_infos.push(self.tuna_config.clone());
                        account_infos.push(self.reward_mint.clone());
                        account_infos.push(self.reward_token_program.clone());
                        account_infos.push(self.tuna_position.clone());
                        account_infos.push(self.tuna_position_ata.clone());
                        account_infos.push(self.tuna_position_owner_reward_ata.clone());
                        account_infos.push(self.whirlpool_program.clone());
                        account_infos.push(self.whirlpool.clone());
                        account_infos.push(self.orca_position.clone());
                        account_infos.push(self.reward_vault.clone());
                        account_infos.push(self.tick_array_lower.clone());
                        account_infos.push(self.tick_array_upper.clone());
                        account_infos.push(self.memo_program.clone());
              remaining_accounts.iter().for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

    if signers_seeds.is_empty() {
      solana_program::program::invoke(&instruction, &account_infos)
    } else {
      solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
    }
  }
}

/// Instruction builder for `CollectRewardOrca` via CPI.
///
/// ### Accounts:
///
                      ///   0. `[writable, signer]` authority
          ///   1. `[]` tuna_config
          ///   2. `[]` reward_mint
          ///   3. `[]` reward_token_program
                ///   4. `[writable]` tuna_position
          ///   5. `[]` tuna_position_ata
                ///   6. `[writable]` tuna_position_owner_reward_ata
          ///   7. `[]` whirlpool_program
          ///   8. `[]` whirlpool
                ///   9. `[writable]` orca_position
                ///   10. `[writable]` reward_vault
                ///   11. `[writable]` tick_array_lower
                ///   12. `[writable]` tick_array_upper
          ///   13. `[]` memo_program
#[derive(Clone, Debug)]
pub struct CollectRewardOrcaCpiBuilder<'a, 'b> {
  instruction: Box<CollectRewardOrcaCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> CollectRewardOrcaCpiBuilder<'a, 'b> {
  pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
    let instruction = Box::new(CollectRewardOrcaCpiBuilderInstruction {
      __program: program,
              authority: None,
              tuna_config: None,
              reward_mint: None,
              reward_token_program: None,
              tuna_position: None,
              tuna_position_ata: None,
              tuna_position_owner_reward_ata: None,
              whirlpool_program: None,
              whirlpool: None,
              orca_position: None,
              reward_vault: None,
              tick_array_lower: None,
              tick_array_upper: None,
              memo_program: None,
                                            reward_index: None,
                    __remaining_accounts: Vec::new(),
    });
    Self { instruction }
  }
      /// 
/// TUNA accounts
/// 
#[inline(always)]
    pub fn authority(&mut self, authority: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.authority = Some(authority);
                    self
    }
      #[inline(always)]
    pub fn tuna_config(&mut self, tuna_config: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.tuna_config = Some(tuna_config);
                    self
    }
      #[inline(always)]
    pub fn reward_mint(&mut self, reward_mint: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.reward_mint = Some(reward_mint);
                    self
    }
      #[inline(always)]
    pub fn reward_token_program(&mut self, reward_token_program: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.reward_token_program = Some(reward_token_program);
                    self
    }
      #[inline(always)]
    pub fn tuna_position(&mut self, tuna_position: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.tuna_position = Some(tuna_position);
                    self
    }
      #[inline(always)]
    pub fn tuna_position_ata(&mut self, tuna_position_ata: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.tuna_position_ata = Some(tuna_position_ata);
                    self
    }
      #[inline(always)]
    pub fn tuna_position_owner_reward_ata(&mut self, tuna_position_owner_reward_ata: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.tuna_position_owner_reward_ata = Some(tuna_position_owner_reward_ata);
                    self
    }
      /// 
/// ORCA accounts
/// 
#[inline(always)]
    pub fn whirlpool_program(&mut self, whirlpool_program: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.whirlpool_program = Some(whirlpool_program);
                    self
    }
      #[inline(always)]
    pub fn whirlpool(&mut self, whirlpool: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.whirlpool = Some(whirlpool);
                    self
    }
      #[inline(always)]
    pub fn orca_position(&mut self, orca_position: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.orca_position = Some(orca_position);
                    self
    }
      #[inline(always)]
    pub fn reward_vault(&mut self, reward_vault: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.reward_vault = Some(reward_vault);
                    self
    }
      #[inline(always)]
    pub fn tick_array_lower(&mut self, tick_array_lower: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.tick_array_lower = Some(tick_array_lower);
                    self
    }
      #[inline(always)]
    pub fn tick_array_upper(&mut self, tick_array_upper: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.tick_array_upper = Some(tick_array_upper);
                    self
    }
      #[inline(always)]
    pub fn memo_program(&mut self, memo_program: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.memo_program = Some(memo_program);
                    self
    }
                    #[inline(always)]
      pub fn reward_index(&mut self, reward_index: u8) -> &mut Self {
        self.instruction.reward_index = Some(reward_index);
        self
      }
        /// Add an additional account to the instruction.
  #[inline(always)]
  pub fn add_remaining_account(&mut self, account: &'b solana_program::account_info::AccountInfo<'a>, is_writable: bool, is_signer: bool) -> &mut Self {
    self.instruction.__remaining_accounts.push((account, is_writable, is_signer));
    self
  }
  /// Add additional accounts to the instruction.
  ///
  /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
  /// and a `bool` indicating whether the account is a signer or not.
  #[inline(always)]
  pub fn add_remaining_accounts(&mut self, accounts: &[(&'b solana_program::account_info::AccountInfo<'a>, bool, bool)]) -> &mut Self {
    self.instruction.__remaining_accounts.extend_from_slice(accounts);
    self
  }
  #[inline(always)]
  pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
    self.invoke_signed(&[])
  }
  #[allow(clippy::clone_on_copy)]
  #[allow(clippy::vec_init_then_push)]
  pub fn invoke_signed(&self, signers_seeds: &[&[&[u8]]]) -> solana_program::entrypoint::ProgramResult {
          let args = CollectRewardOrcaInstructionArgs {
                                                              reward_index: self.instruction.reward_index.clone().expect("reward_index is not set"),
                                    };
        let instruction = CollectRewardOrcaCpi {
        __program: self.instruction.__program,
                  
          authority: self.instruction.authority.expect("authority is not set"),
                  
          tuna_config: self.instruction.tuna_config.expect("tuna_config is not set"),
                  
          reward_mint: self.instruction.reward_mint.expect("reward_mint is not set"),
                  
          reward_token_program: self.instruction.reward_token_program.expect("reward_token_program is not set"),
                  
          tuna_position: self.instruction.tuna_position.expect("tuna_position is not set"),
                  
          tuna_position_ata: self.instruction.tuna_position_ata.expect("tuna_position_ata is not set"),
                  
          tuna_position_owner_reward_ata: self.instruction.tuna_position_owner_reward_ata.expect("tuna_position_owner_reward_ata is not set"),
                  
          whirlpool_program: self.instruction.whirlpool_program.expect("whirlpool_program is not set"),
                  
          whirlpool: self.instruction.whirlpool.expect("whirlpool is not set"),
                  
          orca_position: self.instruction.orca_position.expect("orca_position is not set"),
                  
          reward_vault: self.instruction.reward_vault.expect("reward_vault is not set"),
                  
          tick_array_lower: self.instruction.tick_array_lower.expect("tick_array_lower is not set"),
                  
          tick_array_upper: self.instruction.tick_array_upper.expect("tick_array_upper is not set"),
                  
          memo_program: self.instruction.memo_program.expect("memo_program is not set"),
                          __args: args,
            };
    instruction.invoke_signed_with_remaining_accounts(signers_seeds, &self.instruction.__remaining_accounts)
  }
}

#[derive(Clone, Debug)]
struct CollectRewardOrcaCpiBuilderInstruction<'a, 'b> {
  __program: &'b solana_program::account_info::AccountInfo<'a>,
            authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                tuna_config: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                reward_mint: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                reward_token_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                tuna_position: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                tuna_position_ata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                tuna_position_owner_reward_ata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                whirlpool_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                whirlpool: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                orca_position: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                reward_vault: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                tick_array_lower: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                tick_array_upper: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                memo_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                        reward_index: Option<u8>,
        /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
  __remaining_accounts: Vec<(&'b solana_program::account_info::AccountInfo<'a>, bool, bool)>,
}

