import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UILargeScreen, {
  mapStateToProps, mapDispatchToProps
} from './UILargeScreen';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    hot(module)(UILargeScreen)
  )
);
