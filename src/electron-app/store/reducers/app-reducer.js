const { name, description, version } = require('../../package.json');


const initialState = {
  name: name,
  description: description,
  version: version,
  base: `${process.env.PUBLIC_URL}`,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
module.exports = appReducer
