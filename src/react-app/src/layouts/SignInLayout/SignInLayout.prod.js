import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js'
import { withTranslation } from 'react-i18next';
import SignInLayout, {
  mapStateToProps, mapDispatchToProps
} from './SignInLayout';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    withTranslation()(SignInLayout)
  )
);
