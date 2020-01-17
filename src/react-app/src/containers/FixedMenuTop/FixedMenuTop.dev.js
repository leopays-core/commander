import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import FixedMenuTop, {
  mapStateToProps, mapDispatchToProps
} from './FixedMenuTop';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    hot(module)(FixedMenuTop)
  )
);
