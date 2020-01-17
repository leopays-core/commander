import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import Footer, {
  mapStateToProps, mapDispatchToProps
} from './Footer';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(Footer)
);
