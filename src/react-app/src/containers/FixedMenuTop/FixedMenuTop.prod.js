import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import FixedMenuTop, {
  mapStateToProps, mapDispatchToProps
} from './FixedMenuTop';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(FixedMenuTop)
);
