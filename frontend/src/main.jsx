import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './home/Home'
import ErrorPage from './errors/errorPage'
import Header from './header/Header'
import AllBooks from './books/AllBooks'
import AllComics from './comics/AllComics'

const router = createBrowserRouter([
    {
        path:"/",
        element: [<Header key='head'/>, <Home key='home'/>],
        errorElement: <ErrorPage />,
    },
    {
        path: "/books",
        element: [<Header key="head" />, <AllBooks key="book" />],
    },
    {
        path: "/comics",
        element: [<Header key="head" />, <AllComics key="comic" />],
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)