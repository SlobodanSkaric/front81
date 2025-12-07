import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from  "./Components/HomePage";
import Login from "./Components/Login";
import UserProfile from './Components/UserProfile';
import AdministratorProfile from './Components/AdministratorProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/userprofile",
    element: <UserProfile />
  },
  {
    path: "/adminprofile",
    element: <AdministratorProfile />
  }

  ]);

  export default function AppRouter() {
    return <RouterProvider router={router} />;
  }