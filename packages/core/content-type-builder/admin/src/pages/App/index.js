/**
 *
 * App
 *
 */

import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoadingIndicatorPage, CheckPagePermissions } from '@strapi/helper-plugin';
import { Layout } from '@strapi/parts/Layout';
import pluginPermissions from '../../permissions';
import pluginId from '../../pluginId';
import DataManagerProvider from '../../components/DataManagerProvider';
import RecursivePath from '../RecursivePath';
import icons from './utils/icons.json';
import TempTP from './TempTP';
  <<<<<<< ds-props-update
import ContentTypeBuilderNav from '../../components/ContentTypeBuilderNav';
  =======
import Wrapper from './Wrapper';
  >>>>>>> core/enable-ctb

const ListView = lazy(() => import('../ListView'));

const App = () => {
  return (
    <TempTP>
      <CheckPagePermissions permissions={pluginPermissions.main}>
  <<<<<<< ds-props-update
        <DataManagerProvider allIcons={icons}>
          <Layout sideNav={<ContentTypeBuilderNav />}>
  =======
        <Wrapper>
          <DataManagerProvider allIcons={icons}>
  >>>>>>> core/enable-ctb
            <Suspense fallback={<LoadingIndicatorPage />}>
              <Switch>
                <Route path={`/plugins/${pluginId}/content-types/:uid`} component={ListView} />
                <Route
                  path={`/plugins/${pluginId}/component-categories/:categoryUid`}
                  component={RecursivePath}
                />
              </Switch>
            </Suspense>
  <<<<<<< ds-props-update
          </Layout>
        </DataManagerProvider>
  =======
          </DataManagerProvider>
        </Wrapper>
  >>>>>>> core/enable-ctb
      </CheckPagePermissions>
    </TempTP>
  );
};

export default App;
