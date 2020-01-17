//servers-actions.js
import { servers } from '../../constants/action-types';
import eosio from '../../constants/eosio';
import EosApi from 'eosjs-api';
//import { servers } from '../../api';

//import { Api, JsonRpc, RpcError } from 'eosjs';
//import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';
//import { TextEncoder, TextDecoder } from 'text-encoding';
//const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
//const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
//'http://127.0.0.1:8888'
//const rpc = new JsonRpc('dc1.eosemerge.io:8888', { fetch });
//const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });


//signatureProvider.getAvailableKeys().then((keys) => {
//  console.log(keys)
//})


//eosio.networks;
//eosio.servers;

export const serverUpdate = (server, info) => ({
  type: servers.server.update,
  payload: {
    server: server,
    info: info,
  },
});
export const serverError = (server, error) => ({
  type: servers.server.error,
  payload: {
    server: server,
    error: error,
  },
});

export const checkAllServers = () => (dispatch) => {
  for (let i in eosio.servers) {
    const srv = eosio.servers[i];
    const options = {
      httpEndpoint: srv.endpoint, //'http://127.0.0.1:8888', // default, null for cold-storage
      verbose: (process.env.NODE_ENV === 'production') ? false : true, // API logging
      logger: { // Default logging functions
        log: console.log,
        error: console.error,
      },
      fetchConfiguration: { credentials: 'same-origin' },
    };

    const eos = EosApi(options);
    eos.getInfo({})
      .then((info) => {
        //if (srv.chain_id !== info.chain_id)
        //  throw new Error(`Another chain_id`);
        dispatch(serverUpdate(srv, info));
      })
      .catch((error) => {
        dispatch(serverError(srv, { message: error.message }));
      });
    /*
    eos.getBlock(1).then(result => console.log(result))
    eos.getCurrencyBalance("eosio.token", "eosio", "EOS").then(result => console.log(result))

    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
    */
  }
}
