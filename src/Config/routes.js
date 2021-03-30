import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Settings from '../Pages/Settings';

const routes =[
  {
    path:'/',
    component: Login,
    isPrivate: false
  },
  {
    path:'/login',
    component: Login,
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
