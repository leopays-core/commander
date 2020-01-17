import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UIMobile, {
  mapStateToProps, mapDispatchToProps
} from './UIMobile';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(UIMobile)
);
