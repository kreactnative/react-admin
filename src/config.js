/**
 * Admin panel configuration object
 */
export default {
  /** Admin base path. Will be prepended to all routes */
  basePath: '/admin',

  sections: [
    {
      id: 'client_cases',
      title: 'Client cases',
    },
    {
      id: 'news',
      title: 'News',
    },
    {
      id: 'team',
      title: 'Team',
    },
    {
      id: 'pages',
      title: 'Pages',
    },
  ],
};
