import { useCallback, useEffect, useReducer } from 'react';
import { useNotification } from '@strapi/helper-plugin';
import { useIntl } from 'react-intl';
import { get } from 'lodash';
import init from './init';
import pluginId from '../../pluginId';
import { cleanPermissions, formatPolicies, getTrad } from '../../utils';
import axiosInstance from '../../utils/axiosInstance';
import reducer, { initialState } from './reducer';

const usePlugins = (shouldFetchData = true) => {
  const { formatMessage } = useIntl();
  const toggleNotification = useNotification();
  const [{ permissions, routes, policies, isLoading }, dispatch] = useReducer(
    reducer,
    initialState,
    () => init(initialState, shouldFetchData)
  );

  const fetchPlugins = useCallback(async () => {
    try {
      dispatch({
        type: 'GET_DATA',
      });

      const [{ permissions }, { routes }, { policies }] = await Promise.all(
        [`/${pluginId}/permissions`, `/${pluginId}/routes`, `/${pluginId}/policies`].map(
          async endpoint => {
            const res = await axiosInstance.get(endpoint);

            return res.data;
          }
        )
      );

      dispatch({
        type: 'GET_DATA_SUCCEEDED',
        permissions: cleanPermissions(permissions),
        routes,
        policies: [
          {
            label: formatMessage({ id: getTrad('Policies.InputSelect.empty') }),
            value: 'empty__string_value',
          },
          ...formatPolicies(policies),
        ],
      });
    } catch (err) {
      const message = get(err, ['response', 'payload', 'message'], 'An error occured');

      dispatch({
        type: 'GET_DATA_ERROR',
      });

      if (message !== 'Forbidden') {
        toggleNotification({
          type: 'warning',
          message,
        });
      }
    }
  }, [formatMessage, toggleNotification]);

  useEffect(() => {
    if (shouldFetchData) {
      fetchPlugins();
    }
  }, [fetchPlugins, shouldFetchData]);

  return {
    permissions,
    routes,
    policies,
    getData: fetchPlugins,
    isLoading,
  };
};

export default usePlugins;
