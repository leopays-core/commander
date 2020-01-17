import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UIDefault, {
  mapStateToProps, mapDispatchToProps
} from './UIDefault';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(UIDefault)
);
