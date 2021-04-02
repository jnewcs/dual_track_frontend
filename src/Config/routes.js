import Dashboard from '../Pages/Dashboard';
import Entrance from '../Pages/Entrance';
import NotFound from '../Pages/NotFound';
import Settings from '../Pages/Settings';

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
    path:'/settings',
    component: Settings,
    isPrivate: true
  },
  {
    path:'/*',
    component: NotFound,
    isPrivate: false
  },
]
 
export default routes;
