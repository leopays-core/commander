import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import InstallPageLayout, {
  mapStateToProps, mapDispatchToProps
} from './InstallPageLayout';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(
    hot(module)(InstallPageLayout)
  )
);
