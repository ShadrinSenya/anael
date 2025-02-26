
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import News from "./pages/News";
import Employees from "./pages/Employees";
import Files from "./pages/Files";
import Forum from "./pages/Forum";
import Knowledge from "./pages/Knowledge";
import Calendar from "./pages/Calendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "news",
        element: <News />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "files",
        element: <Files />,
      },
      {
        path: "forum",
        element: <Forum />,
      },
      {
        path: "knowledge",
        element: <Knowledge />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
