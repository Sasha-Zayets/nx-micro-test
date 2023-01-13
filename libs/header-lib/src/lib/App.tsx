import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Layout from './Layout';
import Users from './Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <div>Home Page</div>
        <Link to="/about">About</Link> <br />
        <Link to="/123123">Not Found</Link>
      </Layout>
    ),
  },
  {
    path: "about",
    element: (
      <Layout>
        <div>React About</div>
        <Link to="/">Home</Link>
      </Layout>
    ),
  },
  {
    path: "users",
    element: (
      <Layout>
        <Users />
      </Layout>
    )
  },
  {
    path: "*",
    element: (
      <Layout>
        <div>React Not found</div>
        <Link to="/">Home</Link>
      </Layout>
    ),
  },
]);

export function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}
