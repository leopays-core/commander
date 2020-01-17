import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import Footer, {
  mapStateToProps, mapDispatchToProps
} from './Footer';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    hot(module)(Footer)
  )
);
