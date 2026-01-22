import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./pages/Add";
import HomeLayout from "./components/HomeLayout";
import List from "./pages/List";
import Orders from "./pages/Orders";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/list",
          element: <List />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
