import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const TestPage = lazy(() => import("./pages/test"));
const TestPagessss = lazy(() => import("./pages/test2"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: (
      <Suspense fallback={<div>در حال بارگذاری...</div>}>
        <TestPage />
      </Suspense>
    ),
  },
  {
    path: "/elnaz",
    element: (
      <Suspense fallback={<div>در حال بارگذاری...</div>}>
        <TestPagessss />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
