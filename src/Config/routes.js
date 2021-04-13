import React from 'react';

import Dashboard from '../Pages/Dashboard';
import Entrance from '../Pages/Entrance';
import NotFound from '../Pages/NotFound';
const LazyWorkouts = React.lazy(() => import('../Pages/Workouts'));
const LazySettings = React.lazy(() => import('../Pages/Settings'));

const routes =[
  {
    path:'/',
    component: Entrance,
    isPrivate: false
  },
  {
    path:'/entrance',
    component: Entrance,
    isPrivate: false
  },
  {
    path:'/dashboard',
    component: Dashboard,
    isPrivate: true
  },
  {
    path:'/workouts',
    component: LazyWorkouts,
    isPrivate: true
  },
  {
    path:'/settings',
    component: LazySettings,
    isPrivate: true
  },
  {
    path:'/*',
    component: NotFound,
    isPrivate: false
  },
]

export default routes;
