import { createBrowserRouter } from 'react-router';
import { LandingPage } from './screens/LandingPage';
import { Login } from './screens/Login';
import { Signup } from './screens/Signup';
import { DashboardLayout } from './components/DashboardLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './screens/Dashboard';
import { DataInput } from './screens/DataInput';
import { Analysis } from './screens/Analysis';
import { AllocationPlanner } from './screens/AllocationPlanner';
import { NGODirectory } from './screens/NGODirectory';
import { Donations } from './screens/Donations';
import { Settings } from './screens/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'data-input',
        element: <DataInput />
      },
      {
        path: 'analysis',
        element: <Analysis />
      },
      {
        path: 'allocation',
        element: <AllocationPlanner />
      },
      {
        path: 'ngo-directory',
        element: <NGODirectory />
      },
      {
        path: 'donations',
        element: <Donations />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
]);
