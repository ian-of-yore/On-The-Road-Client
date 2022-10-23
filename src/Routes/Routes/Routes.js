import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import LogIn from "../../pages/Authentication/LogIn/LogIn";
import Register from "../../pages/Authentication/Register/Register";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/News/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/news'),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])