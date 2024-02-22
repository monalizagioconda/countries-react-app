import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root'
import List from './routes/List'
import Details from './routes/Details'
import store from './store'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          element: <List />,
          index: true,
        },
        {
          element: <List />,
          path: 'countries',
        },
        {
          path: 'countries/:countryId',
          element: <Details />,
        },
      ],
    },
  ],
  {
    basename: '/countries-react-app', // podstawowa ścieżka, do której dodawane są wszystkie ścieżki
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
)
