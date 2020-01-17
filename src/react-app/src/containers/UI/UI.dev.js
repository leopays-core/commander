import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UI, {
  mapStateToProps, mapDispatchToProps
} from './UI';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    hot(module)(UI)
  )
);
