import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/loader";

const Cart = lazy(() => import("./pages/cart-page"));
const Home = lazy(() => import("./pages/home-page"));
const Menus = lazy(() => import("./pages/menus-page"));
const NewOrder = lazy(() => import("./pages/neworder-page"));
const Orders = lazy(() => import("./pages/orders-page"));
const OrderSingle = lazy(() => import("./pages/singleorder-page"));
const AppLayout = lazy(() => import("./components/app-layout"));
const ErrorPage = lazy(() => import("./pages/error-page"));
const Error = lazy(() => import("./components/error"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menus />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <NewOrder />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/order/:orderId",
        element: <OrderSingle />,
      },
    ],
  },
]);
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
