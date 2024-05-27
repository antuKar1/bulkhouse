import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Blog from "../pages/Blog/Blog";

import Contact from "../pages/contact/Contact";

import DashLayout from "../layout/DashLayout";
import Products from "../pages/Products/Products";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import AllProductsDashboard from "../pages/Dashboard/AllProductsDashboard";
import AddProduct from "../pages/Dashboard/AddProduct";
import EditProduct from "../pages/Dashboard/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/shoes"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: (props) =>fetch(`http://localhost:3000/shoes/${props.params.id}`),
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashLayout></DashLayout>,
    children: [
      {
        path: "allproducts",
        element: <AllProductsDashboard></AllProductsDashboard>,
        
      },
      {
        path: "addproduct",
        element: <AddProduct></AddProduct>,
        
      },
      {
            path:"allproducts/edit/:id",
            loader: (props) =>fetch(`http://localhost:3000/shoes/${props.params.id}`),
            element: <EditProduct></EditProduct>,
          },
    ],
  },
]);

export default router;
