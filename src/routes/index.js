import React from 'react';

// Pages
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';

const route = [
  {
    url: '/',
    page: <HomePage />,
  },
  {
    url: '/dashboard',
    page: <DashboardPage />,
  },
];

export default route;
