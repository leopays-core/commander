import eosio from '../../constants/eosio';
import { servers } from '../../constants/action-types';


let initialState = {
  current_server_id: null,
  current_network_chain_id: null,
  servers: {},
  networks: {},
};
for (let s in eosio.servers) {
  const srv = eosio.servers[s];
  initialState.servers[srv.id] = {
    server: srv,
    error: null,
    info: null,
  };
}
for (let s in eosio.networks) {
  const net = eosio.networks[s];
  initialState.networks[net.chain_id] = net;
}

export const serversReducer = (state = initialState, action) => {
  switch (action.type) {
    case servers.server.update:
      const info = action.payload.info;
      state.servers[action.payload.server.id].info = info;
      state.servers[action.payload.server.id].error = null;
      if (state.servers[action.payload.server.id].server.chain_id !== action.payload.info.chain_id) {
        state.servers[action.payload.server.id].server.chain_id = action.payload.info.chain_id;
      }
      return state;
    case servers.server.error:
      state.servers[action.payload.server.id].error = action.payload.error;
      return state;
    default:
      return state;
  }
}

/*
payload: {
  server: server,
  error: error || null,
  info: info || null,
}
*/