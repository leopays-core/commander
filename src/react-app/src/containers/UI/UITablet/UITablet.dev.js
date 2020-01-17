import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UITablet, {
  mapStateToProps, mapDispatchToProps
} from './UITablet';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    hot(module)(UITablet)
  )
);
