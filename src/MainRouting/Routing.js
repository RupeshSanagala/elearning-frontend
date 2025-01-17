import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutingComp from "./ProtectedRoutingComp";
import MainDashBoardComp from "../Layout/MainDashBoardComp";
import HomeComp from "../Components/HomeComp";
import CoursesComp from "../Components/CoursesComp";
import WebDevelopment from "../Components/WebDevlopment";
import DataScience from "../Components/DataScience";
import MachineLearning from "../Components/MachineLearning";
import GraphicDesign from "../Components/GraphicDesign";
import LoginComp from "../Components/LoginComp";
import RegisterComp from "../Components/RegisterComp";
import AboutComp from "../Components/AboutComp";
import ContactComp from "../Components/ContactComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutingComp Component={MainDashBoardComp} />,
    children: [
      { path: "home", element: <HomeComp /> },
      {
        path: "courses",element: <CoursesComp />,
        children: [
          { path: "/courses/web-development", element: <WebDevelopment /> },
          { path: "data-science", element: <DataScience /> },
          { path: "machine-learning", element: <MachineLearning /> },
          { path: "graphic-design", element: <GraphicDesign /> },
        ],
      },
      {path:"about",element:<AboutComp/>},
      {path:"contact",element:<ContactComp/>},
      { path: "login", element: <LoginComp /> },
      { path: "register", element: <RegisterComp /> },
      { path: "*", element: <div>404: Page Not Found</div> },
    ],
  },
]);

export default router;

