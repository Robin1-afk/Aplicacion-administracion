import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import ProtectedRoute from 'components/ProtectedRoute';
import Dashboard from 'layout/Dashboard';

// render - pages
const Login = Loadable(lazy(() => import('pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/register')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: 
  <MinimalLayout  />,
  children: [
    {
      // Ruta protegida para "Negocios"
      path: '/',
      element: 
      <ProtectedRoute><Dashboard /></ProtectedRoute>,
        children: [
          {
      // Ruta protegida para "Negocios"
      path: '/Dashboard',
      element: (
        <ProtectedRoute><DashboardDefault /></ProtectedRoute>
      )
      }
        ]
    },
    {
      path: '/register',
      element:  <AuthRegister />
    },
    {
    path: '/login',
    element: <Login />
    }
  ],
  

};

export default LoginRoutes;
