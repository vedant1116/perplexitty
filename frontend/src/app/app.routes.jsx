import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import Register from '../features/auth/pages/Register'
import {Protected} from '../features/auth/components/Protected'
import DashBoard from '../features/chat/pages/DashBoard'
export const router = createBrowserRouter([
   
{
    path:"/login",
    element:<Login/>
},
{
    path:"/",
    element:<Protected>
        <DashBoard/>
    </Protected>
},
{
    path:"/register",
    element:<Register/>
},
{
    path:"/dashboard",
    element:<Navigate to="/" replace/>
}])


