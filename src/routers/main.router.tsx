import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { LoadingPage } from 'pages/Loading.page';
import { AuthPage } from 'pages/Auth.page';
import { AuthProvider } from '../context/auth/AuthProvider';
import { DashboardPage } from '../pages/Dashboard.page';
import { DashboardRouter } from './dashboard.router';

const elementWithMiddleware = (element: React.ReactNode) => {
  return (
    <AuthProvider>
      {element}
    </AuthProvider>
  )
}



const router = createBrowserRouter([
  {
    path: '/',
    element: elementWithMiddleware(<LoadingPage />)
  },
  {
    path: '/auth',
    element: elementWithMiddleware(<AuthPage />)
  },
  {
    path: '/dashboard',
    element: elementWithMiddleware(<DashboardPage />),
    children: DashboardRouter
  }
])

export const AppRouter: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};