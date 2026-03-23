import { createBrowserRouter } from "react-router-dom";
import BroAdmin from "../BroPages/BroAdmin";
import BroSetting from "../BroPages/BroSetting";
import BroProfile from "../BroPages/BroProfile";
import BroLayout from "../BroComponets/BroLayout";

let myRouter = createBrowserRouter([
  {
    path: "/",
    element: <BroLayout />,
    children: [
      {
        index:true,
        element: <BroAdmin />,
      },
      {
        path:"/broprofile",
        element: <BroProfile />,
      },
      {
        path: "/brosetting",
        element: <BroSetting />,
      },{
        path: "*",
        element: <h1>404 not found</h1>,
      },
    ],
  },
]);
export default myRouter;
