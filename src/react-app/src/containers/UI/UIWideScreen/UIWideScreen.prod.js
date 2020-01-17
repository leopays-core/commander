import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UIWideScreen, {
  mapStateToProps, mapDispatchToProps
} from './UIWideScreen';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(UIWideScreen)
);
