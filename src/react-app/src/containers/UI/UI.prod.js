import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UI, {
  mapStateToProps, mapDispatchToProps
} from './UI';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(UI)
);
