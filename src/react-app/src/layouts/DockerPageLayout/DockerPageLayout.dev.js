import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import DockerPageLayout, {
  mapStateToProps, mapDispatchToProps
} from './DockerPageLayout';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    withTranslation()(
      hot(module)(DockerPageLayout)
    )
  )
);
