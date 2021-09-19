/**
 *
 * App
 *
 */

import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
  <<<<<<< bump-parts-alpha-33
import { LoadingIndicatorPage, CheckPagePermissions } from '@strapi/helper-plugin';
import { Layout } from '@strapi/parts/Layout';
  =======
import { LoadingIndicatorPage, CheckPagePermissions, TP } from '@strapi/helper-plugin';
  >>>>>>> test/enable-plugins
import pluginPermissions from '../../permissions';
import pluginId from '../../pluginId';
import DataManagerProvider from '../../components/DataManagerProvider';
import RecursivePath from '../RecursivePath';
import icons from './utils/icons.json';
import TempTP from './TempTP';
import ContentTypeBuilderNav from '../../components/ContentTypeBuilderNav';

const ListView = lazy(() => import('../ListView'));

const App = () => {
  return (
  <<<<<<< bump-parts-alpha-33
    <TempTP>
      <CheckPagePermissions permissions={pluginPermissions.main}>
        <DataManagerProvider allIcons={icons}>
          <Layout sideNav={<ContentTypeBuilderNav />}>
  =======
    <TP>
      <CheckPagePermissions permissions={pluginPermissions.main}>
        <Wrapper>
          <DataManagerProvider allIcons={icons}>
  >>>>>>> test/enable-plugins
            <Suspense fallback={<LoadingIndicatorPage />}>
              <Switch>
                <Route path={`/plugins/${pluginId}/content-types/:uid`} component={ListView} />
                <Route
                  path={`/plugins/${pluginId}/component-categories/:categoryUid`}
                  component={RecursivePath}
                />
              </Switch>
            </Suspense>
  <<<<<<< bump-parts-alpha-33
          </Layout>
        </DataManagerProvider>
      </CheckPagePermissions>
    </TempTP>
  =======
          </DataManagerProvider>
        </Wrapper>
      </CheckPagePermissions>
    </TP>
  >>>>>>> test/enable-plugins
  );
};

export default App;
