import React from "react";
import toast from "react-hot-toast";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./componets/Layout";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/Product";
import NavUserAdmin from "./NavLinkNavbar/NavPages/NavUserAdmin";
import NavUSerConcatUS from "./NavLinkNavbar/NavPages/NavUSerConcatUS";
import UseSetting from "./NavLinkNavbar/NavPages/UseSetting";
import NavHeadre from "./NavLinkNavbar/NavComponets/NavHeadre";
import NavLayout from "./NavLinkNavbar/NavComponets/NavLayout";
import myRouter from "./CreateBrowserRoutes/routes/route";
import MyProfile from "./NestedCreateBrowser/routes";

const App = () => {
  // toast.error("demo");

  return (
    <React.Fragment>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/product" element={<Product/>} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayout/>} >
          <Route index element={<NavUserAdmin />} />
          <Route path="/userconcat" element={<NavUSerConcatUS />} />
          <Route path="/usersetting" element={<UseSetting />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* <RouterProvider router={myRouter}/> */}
      <RouterProvider router={MyProfile}/>
    </React.Fragment>
  );
};

export default App;
