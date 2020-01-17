import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js'
import { withTranslation } from 'react-i18next';
import NotFoundPageLayout, {
  mapStateToProps, mapDispatchToProps
} from './NotFoundPageLayout';


export default connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    withTranslation()(NotFoundPageLayout)
  )
);
