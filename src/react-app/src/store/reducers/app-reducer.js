import { name, description, version } from '../../../package.json';
import { fromJS } from 'immutable';


const initialState = fromJS({
  name: name,
  description: description,
  version: version,
  base: `${process.env.PUBLIC_URL}`,
});

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
