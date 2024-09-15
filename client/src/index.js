import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from "./views/App/App"
import AddNote from "./views/AddNote/AddNote"
import ViewNotes from "./views/ViewNotes/ViewNote"


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/add-note",
        element:<AddNote/>
    },
    {
        path:"/view-note",
        element:<ViewNotes/>
    },
    {
        path:"*",
        element:<h1>404 Not Found</h1>
    }
])
root.render(<RouterProvider router={router}/>);

