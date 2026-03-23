import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Abouts from "./Pages/Abouts";
import Profile from "./Pages/Profile";
import NetsLayout from "./Componets/NetsLayout";

let MyProfile = createBrowserRouter([
  {
    path: "/home",
    element: <NetsLayout />,
    children: [
      
      {
        path:"admin",
        element: <Admin />,
      },
      {
       path:"homee",
        element:<Home/>,
      },
      {
        path:"about",
        element: <Abouts />,
      },
      {
        path:"profile",
        element: <Profile />,
      },
    ],
  },
]);
export default MyProfile;
