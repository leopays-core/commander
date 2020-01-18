import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js'
import { withTranslation } from 'react-i18next';
import ExplorerPageLayout, {
  mapStateToProps, mapDispatchToProps
} from './ExplorerPageLayout';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    withTranslation()(ExplorerPageLayout)
  )
);
