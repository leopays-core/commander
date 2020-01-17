import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import UserMenuTrigger, {
  mapStateToProps, mapDispatchToProps
} from './UserMenuTrigger';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    withTranslation()(UserMenuTrigger)
  )
);
