import { fromJS } from 'immutable';
import eosio from '../../constants/eosio';
import { servers } from '../../constants/action-types';


let is = {
  current_server_id: null,
  current_network_chain_id: null,
  servers: {},
  networks: {},
};
for (let s in eosio.servers) {
  const srv = eosio.servers[s];
  is.servers[srv.id] = {
    server: srv,
    error: null,
    info: null,
  };
}
for (let s in eosio.networks) {
  const net = eosio.networks[s];
  is.networks[net.chain_id] = net;
}

const initialState = fromJS(is);

export const serversReducer = (state = initialState, action) => {
  switch (action.type) {
    case servers.server.update:
      const info = fromJS(action.payload.info);
      let tmp = state.setIn(['servers', action.payload.server.id, 'info'], info);
      tmp.setIn(['servers', action.payload.server.id, 'error'], fromJS(null));
      if (tmp.getIn['servers', action.payload.server.id, 'server', 'chain_id'] !== action.payload.info.chain_id) {
        return tmp.setIn(['servers', action.payload.server.id, 'server', 'chain_id'], fromJS(action.payload.info.chain_id));
      } else
        return tmp;
    case servers.server.error:
      const error = fromJS(action.payload.error);
      return state.setIn(['servers', action.payload.server.id, 'error'], error);
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