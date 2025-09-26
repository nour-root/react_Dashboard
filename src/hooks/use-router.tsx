import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "@/Layout";
const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
};
export default useRouter;
