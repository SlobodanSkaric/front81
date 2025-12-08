import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from  "./Layouts/HomePage";
import Login from "./Layouts/Login";
import UserProfile from './Layouts/UserProfile';
import AdministratorProfile from './Layouts/AdministratorProfile';
import JobLists from './Pages/JobLists';
import CreateListJob from './Pages/CreateListJob';
import CurentState from './Pages/CurentState';
import Customers from './Pages/Customers';
import Services from './Pages/Services';
import AdministratorsPanel from './Pages/AdministratorsPanel';

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
    element: <AdministratorProfile />,
    children:[
      {
        path: "showlistjob",
        element: <JobLists />
      },
      {
        path: "createlistjob",
        element:<CreateListJob />
      },
      {
        path: "curentstate",
        element:<CurentState />
      },
      {
        path:"customers",
        element:<Customers />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "administratorspanel",
        element: <AdministratorsPanel />
      },
      {
        path: "logout",
      }
    ]
  }

  ]);

  export default function AppRouter() {
    return <RouterProvider router={router} />;
  }