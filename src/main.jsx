import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from './Layout.jsx'
import HomePage, { loader as homePageLoader } from '@pages/home-page/HomePage.jsx'
import CategoriesPage, { loader as categoriesPageLoader } from '@pages/categories-page/CategoriesPage.jsx'
import ErrorPage from '@pages/error-page/ErrorPage.jsx'
import FilmPage, { loader as filmPageLoader } from '@pages/film-page/FilmPage.jsx'
import SearchPage, { loader as filmSearchLoader } from '@pages/search-page/SearchPage.jsx'
import FavoritesPage from '@pages/favorites-page/FavoritesPage.jsx'
import AboutPage from '@pages/about-page/AboutPage.jsx'
import PersonPage, { loader as personPageLoader } from '@pages/person-page/PersonPage.jsx'
import { action as filmSearchAction } from '@components/search-bar/SearchBar.jsx'

import './index.css'

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        index: true,
        errorElement: <ErrorPage />,
        loader: homePageLoader,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
        errorElement: <ErrorPage />,
        loader: categoriesPageLoader,
      },
      {
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/search",
        element: <SearchPage />,
        errorElement: <ErrorPage />,
        loader: filmSearchLoader,
        action: filmSearchAction,
        children: [
          {
            path: '/search/:name',
            element: <SearchPage />,
            errorElement: <ErrorPage />,
            loader: filmSearchLoader,
            action: filmSearchAction,
          }
        ]
      },
      {
        path: "/films/:film",
        element: <FilmPage />,
        errorElement: <ErrorPage />,
        loader: filmPageLoader,
      },
      {
        path: "/person/:personId",
        element: <PersonPage />,
        errorElement: <ErrorPage />,
        loader: personPageLoader,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
