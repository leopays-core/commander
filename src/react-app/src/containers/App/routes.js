import React from 'react';
import Loadable from 'react-loadable';
import { Helmet } from 'react-helmet';
import UI from '../../containers/UI';
import LoadingApp from '../../components/LoadingApp';
import SwitchWithRoutes from '../../components/SwitchWithRoutes';



function BC({ txt, pn }) {
  return (
    <UI>
      <Helmet>
        <title>{txt ? txt + ' | ' + pn : pn}</title>
      </Helmet>
      <div id="app" className="App-header">
        <hr />
        <div>{txt ? txt : pn}</div>
      </div>
    </UI>
  );
}


const HomePageLayout = Loadable({
  loader: () => import('../../layouts/HomePageLayout'),
  loading: LoadingApp,
});
const InstallPageLayout = Loadable({
  loader: () => import('../../layouts/InstallPageLayout'),
  loading: LoadingApp,
});

const ExplorerPageLayout = Loadable({
  loader: () => import('../../layouts/ExplorerPageLayout'),
  loading: LoadingApp,
});
const DockerPageLayout = Loadable({
  loader: () => import('../../layouts/DockerPageLayout'),
  loading: LoadingApp,
});

/*
const SignInLayout = Loadable({
  loader: () => import('../../layouts/SignInLayout'),
  loading: LoadingApp,
});
*/

const NotFoundPageLayout = Loadable({
  loader: () => import('../../layouts/NotFoundPageLayout'),
  loading: LoadingApp,
});


export const routes = (ml, t) => ([
  {
    exact: true,
    path: ml.url('/'),
    component: () => (<HomePageLayout />),
  },
  {
    exact: true,
    path: ml.url('/install'),
    component: () => (<InstallPageLayout />),
  },
  {
    path: ml.url('/dashboard'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Dashboard')} />),
  },
  {
    path: ml.url('/wallet'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Wallet')} />),
  },
  {
    path: ml.url('/settings'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Settings')} />),
  },
  {
    path: ml.url('/bot'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Bot')} />),
  },
  {
    path: ml.url('/node'),
    component: () => (<BC pn={t('main:proName')} txt={t('menu:Node')} />),
  },
  {
    path: ml.url('/explorer'),
    component: () => (<ExplorerPageLayout />),
  },
  {
    path: ml.url('/docker'),
    component: () => (<DockerPageLayout />),
  },

  {
    path: ml.url('/privacy'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Privacy Policy')} />),
  },
  {
    path: ml.url('/terms'),
    component: () => (<BC pn={t('main:proName')} txt={t('footer:Terms & Conditions')} />),
  },
  {
    path: ml.url('/my'),
    component: SwitchWithRoutes,
    routes: [
      {
        path: ml.url('/my/dashboard'),
        component: () => (<BC pn={t('main:proName')} txt={t('menu:Dashboard')} />),
      }
    ]
  },
  {
    component: () => (<NotFoundPageLayout />),
  }
]);
