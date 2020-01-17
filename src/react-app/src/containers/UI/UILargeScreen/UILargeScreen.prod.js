import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UILargeScreen, {
  mapStateToProps, mapDispatchToProps
} from './UILargeScreen';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(UILargeScreen)
);
