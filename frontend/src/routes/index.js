import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import SignUp from "../pages/SignUp";

const root  = createBrowserRouter([

    {
        path:"/",
        element :<App />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"login",
                element:<Login />
            },
            {
                path:"forget-password",
                element:<ForgetPassword />
            },
            {
                path:"sign-up",
                element:<SignUp />
            },
            
            
        ]
    }
])


export default root
