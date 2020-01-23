import { name, description, version } from '../../../package.json';


const initialState = {
  name: name,
  description: description,
  version: version,
  base: `${process.env.PUBLIC_URL}`,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
