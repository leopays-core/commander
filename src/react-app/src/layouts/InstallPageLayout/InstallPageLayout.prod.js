import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import InstallPageLayout, {
  mapStateToProps, mapDispatchToProps
} from './InstallPageLayout';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(InstallPageLayout)
);
