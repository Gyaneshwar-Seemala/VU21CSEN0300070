import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ProductLayout from './Layouts/ProdcutLayout';
import ProductListing from './Components/Pages/Product_Listing/ProductListing';
import Productdetails from './Components/ProductDetails/Productdetails';

function App() {
  useEffect(() => {
    document.title = "Test";
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/:companyName",
      element: <ProductLayout />,
      children: [
        {
          index: true,
          element: <ProductListing />,
        },
        {
          path: "product/:productId",
          element: <Productdetails />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
