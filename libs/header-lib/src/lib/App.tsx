import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <>
        <div>About</div>
        <Link to="/">Home</Link>
      </>
    ),
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
}
