import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import FixedMenuTopComputer, {
  mapStateToProps, mapDispatchToProps
} from './FixedMenuTopComputer';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    withTranslation()(FixedMenuTopComputer)
  )
);
