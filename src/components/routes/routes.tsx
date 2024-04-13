import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AthLayout } from '@/pages/_layouts/auth'
import { NotFound } from '@/pages/404'
import { Dashboard } from '@/pages/App/dashboard/dashboard'
import { Orders } from '@/pages/App/orders/orders'
import { SignIn } from '@/pages/Auth/sign-in'
import { SingUp } from '@/pages/Auth/sign-up'
import { Error } from '@/pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },

  {
    path: '/',
    element: <AthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SingUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
