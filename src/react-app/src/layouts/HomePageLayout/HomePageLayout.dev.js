import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import HomePageLayout, {
  mapStateToProps, mapDispatchToProps
} from './HomePageLayout';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    withTranslation()(
      hot(module)(HomePageLayout)
    )
  )
);
