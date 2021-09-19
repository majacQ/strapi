import omit from 'lodash/omit';
import sortLinks from './utils/sortLinks';
import adminPermissions from '../../permissions';
import formatLinks from './utils/formatLinks';
import globalLinks from './utils/globalLinks';

const init = (initialState, settings) => {
  // Retrieve the links that will be injected into the global section
  const pluginsGlobalLinks = settings.global.links;
  // Sort the links by name
  const sortedGlobalLinks = sortLinks([...pluginsGlobalLinks, ...globalLinks]);
  const otherSections = Object.values(omit(settings, 'global'));

  const menu = [
    {
      ...settings.global,
      links: sortedGlobalLinks,
    },
    {
      id: 'permissions',
      intlLabel: { id: 'Settings.permissions', defaultMessage: 'Administration Panel' },
      links: [
        {
          intlLabel: { id: 'Settings.permissions.menu.link.roles.label' },
          to: '/settings/roles',
          id: 'roles',
          isDisplayed: false,
          permissions: adminPermissions.settings.roles.main,
        },
        {
          intlLabel: { id: 'Settings.permissions.menu.link.users.label' },
          // Init the search params directly
          to: '/settings/users?pageSize=10&page=1&sort=firstname',
          id: 'users',
          isDisplayed: false,
          permissions: adminPermissions.settings.users.main,
        },
      ],
    },
    ...otherSections,
  ];

  return { ...initialState, menu: formatLinks(menu) };
};

export default init;
