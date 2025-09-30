import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "@/Layout";

import SingleUserPage from "@/pages/SingleUserPage";
import PaymentsPage from "@/payments/PaymentsPage";
const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/users/:username", element: <SingleUserPage /> },
        { path: "/payment", element: <PaymentsPage /> },
      ],
    },
  ]);
};
export default useRouter;
