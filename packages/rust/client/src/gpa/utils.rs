use std::error::Error;

use crate::{DecodedAccount, TUNA_ID};
use borsh::BorshDeserialize;
use solana_account_decoder::UiAccountEncoding;
use solana_client::{
    rpc_client::RpcClient,
    rpc_config::{RpcAccountInfoConfig, RpcProgramAccountsConfig},
    rpc_filter::RpcFilterType,
};

#[cfg(feature = "solana-v1")]
pub(crate) fn rpc_program_accounts_config(filters: Vec<RpcFilterType>) -> RpcProgramAccountsConfig {
    RpcProgramAccountsConfig {
        filters: Some(filters),
        account_config: RpcAccountInfoConfig {
            encoding: Some(UiAccountEncoding::Base64),
            data_slice: None,
            commitment: None,
            min_context_slot: None,
        },
        with_context: None,
        sort_results: None,
    }
}

#[cfg(not(feature = "solana-v1"))]
pub(crate) fn rpc_program_accounts_config(filters: Vec<RpcFilterType>) -> RpcProgramAccountsConfig {
    RpcProgramAccountsConfig {
        filters: Some(filters),
        account_config: RpcAccountInfoConfig {
            encoding: Some(UiAccountEncoding::Base64),
            data_slice: None,
            commitment: None,
            min_context_slot: None,
        },
        with_context: None,
        sort_results: None,
    }
}

pub(crate) fn fetch_decoded_program_accounts<T: BorshDeserialize>(rpc: &RpcClient, filters: Vec<RpcFilterType>) -> Result<Vec<DecodedAccount<T>>, Box<dyn Error>> {
    let accounts = rpc.get_program_accounts_with_config(&TUNA_ID, rpc_program_accounts_config(filters))?;
    let mut decoded_accounts: Vec<DecodedAccount<T>> = Vec::new();
    for (address, account) in accounts {
        let mut data = account.data.as_slice();
        let decoded = T::deserialize(&mut data)?;
        decoded_accounts.push(DecodedAccount {
            address,
            account: account.clone(),
            data: decoded,
        });
    }
    Ok(decoded_accounts)
}
