import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import MainPage from "./MainPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
