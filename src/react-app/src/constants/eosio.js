/*
if (process.env.NODE_ENV === 'production') {
}
*/

//export const chain_id = "84a5c6403fbff9418ed1f37d98a0dda87e8f381e33301393ef7450340b4e46b4"; //?!LeoPays Testnet
export const chain_id = "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"; //EOS Mainnet
export const current_network_id = "0";
export const networks = [
  {
    id: "0",
    chain_id: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
    type: "EOSIO", title: "EOS Mainnet"
  }, {
    id: "1",
    chain_id: "84a5c6403fbff9418ed1f37d98a0dda87e8f381e33301393ef7450340b4e46b4", // ?!
    type: "EOSIO", title: "LeoPays Testnet"
  }
];

export const current_server_id = "1";
export const servers = [
  /*{
    id: "0",
    chain_id: null,
    type: "EOSIO", network_title: "LeoPays Testnet",
    title: "http://localhost:8888",
    nodeUrl: 'http://localhost:8888',
    hyperionUrl: 'http://localhost:17555',
    coreSymbol: 'LPC',
    corePrecision: 4,
    systemDomain: 'eosio',
  }, */{
    id: "1",
    chain_id: null,
    type: "EOSIO", network_title: "LeoPays Testnet",
    title: "https://testnet.milliard.money:8888",
    nodeUrl: 'https://testnet.milliard.money:8888',
    hyperionUrl: 'https://testnet.milliard.money:17555',
    coreSymbol: 'LPC',
    corePrecision: 4,
    systemDomain: 'eosio',
  }, , {
    id: "3",
    chain_id: null,
    type: "EOSIO", network_title: "LeoPays Testnet",
    title: "https://localhost:8888",
    nodeUrl: 'https://localhost:8888',
    hyperionUrl: 'https://localhost:17555',
    coreSymbol: 'LPC',
    corePrecision: 4,
    systemDomain: 'eosio',
  }, /*{
    id: "2",
    chain_id: null,
    type: "EOSIO", network_title: "LeoPays Testnet",
    title: "http://testnet.milliard.money:8888",
    nodeUrl: 'http://testnet.milliard.money:8888',
    hyperionUrl: 'http://testnet.milliard.money:17555',
    coreSymbol: 'LPC',
    corePrecision: 4,
    systemDomain: 'eosio',
  }, */ {
    id: "4",
    chain_id: null,
    type: "EOSIO", network_title: "EOS Mainnet",
    title: "https://node.eosflare.io",
    nodeUrl: 'https://node.eosflare.io',
    hyperionUrl: undefined,
    coreSymbol: 'EOS',
    corePrecision: 4,
    systemDomain: 'eosio',
  }
];


export default {
  networks,
  servers,
}
