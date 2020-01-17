import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UITablet, {
  mapStateToProps, mapDispatchToProps
} from './UITablet';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(UITablet)
);
