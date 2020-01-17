import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import FooterComputer, {
  mapStateToProps, mapDispatchToProps
} from './FooterComputer';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    withTranslation()(
      hot(module)(FooterComputer)
    )
  )
);
