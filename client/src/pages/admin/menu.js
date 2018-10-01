/** Use this obj struc for Submenus
 * {
 *  key: 'events',
 *  title: 'Events',
 *  icon: 'calendar',
 *  isSubmenu: true,
 *  subItems: [{
 *  key: 'upcoming',
 *  title: 'Upcoming',
 *  link: '/admin/upcoming',
 *  }],
 * }
 **/

export default [{
  key: 'events',
  title: 'Events',
  icon: 'calendar',
  link: '/admin/events',
}, {
  key: 'organisations',
  title: 'Organisations',
  icon: 'flag',
  link: '/admin/organisations'
}, {
  key: 'financial',
  title: 'Financial Reports',
  icon: 'dollar',
  link: '/admin/financial-reports'
}, {
  key: 'locations',
  title: 'Locations',
  icon: 'global',
  link: '/admin/locations'
}, {
  key: 'accomodations',
  title: 'Accomodations',
  icon: 'key',
  link: '/admin/accomodations'
}, {
  key: 'users',
  title: 'Users',
  icon: 'team',
  link: '/admin/users'
}, {
  key: 'admins',
  title: 'Admins and Roles',
  icon: 'solution',
  link: '/admin/admins-and-roles'
}, {
  key: 'settings',
  title: 'Misc Settings',
  icon: 'setting',
  link: '/admin/misc-settings'
}, {
  key: 'reports',
  title: 'Reports',
  icon: 'area-chart',
  link: '/admin/reports'
}, {
  key: 'support',
  title: 'Support',
  icon: 'message',
  link: '/admin/support'
}];
