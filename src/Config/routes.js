import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';

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
    path:'/*',
    component: NotFound,
    isPrivate: false
  },
]
 
export default routes;
