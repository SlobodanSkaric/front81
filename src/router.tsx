import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from  "./Components/HomePage";
import Login from "./Components/Login";
import UserProfile from './Components/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userprofile",
    element: <UserProfile />
  },
  {
    path: "/login",
    element: <Login />
  }
  ]);

  export default function AppRouter() {
    return <RouterProvider router={router} />;
  }