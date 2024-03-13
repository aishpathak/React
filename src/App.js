import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";

//all the children will go in Outlet
const root = ReactDOM.createRoot(document.getElementById('root'));
const AppLayout = () =>{
    return (
        <>       
            <Header></Header>
            <Outlet/>  
            <Footer></Footer>
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/", 
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },    
            {
                path: "/about",
                element:<About/>
            },
    ]
    }
]);

root.render(<RouterProvider router={appRouter} />)