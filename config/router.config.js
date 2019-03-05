export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // list
      {
        path: '/',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/',
            name: 'searchtable',
            component: './List/TableList',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
