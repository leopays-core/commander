import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UIWideScreen, {
  mapStateToProps, mapDispatchToProps
} from './UIWideScreen';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    hot(module)(UIWideScreen)
  )
);
