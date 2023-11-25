import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage, Root } from './views'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
])
