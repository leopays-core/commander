import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UIComputer, {
  mapStateToProps, mapDispatchToProps
} from './UIComputer';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(UIComputer)
);
