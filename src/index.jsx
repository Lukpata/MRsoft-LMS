import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Quiz, { loader as quizLoader } from "./pages/Quiz/Quiz";
import CreateQuiz from "./pages/Quiz/CreateQuiz";
import StudentDashboard from "./Pages/StudentDashboard/StudentDashboard";
import RegisterStudent from "./Pages/RegisterStudent/RegisterStudent";
import AdminStudentsPage from "./Pages/AdminStudentsPage/AdminStudentsPage";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminCoursesPage from "./Pages/AdminCoursesPage/AdminCoursesPage";
import App from "./App";
import "./index.css";
import AdminTeachersPage from "./Pages/AdminTeachersPage/AdminTeachersPage";
import RegisterStaff from "./Pages/RegisterStaff/RegisterStaff";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "admin",
    element: <AdminDashboard />,
  },
  {
    path: "admin/students",
    element: <AdminStudentsPage />,
  },
  {
    path: "admin/register_student",
    element: <RegisterStudent />,
  },
  {
    path: "admin/register_staff",
    element: <RegisterStaff />,
  },
  {
    path: "admin/courses",
    element: <AdminCoursesPage />,
  },
  {
    path: "admin/teachers",
    element: <AdminTeachersPage />,
  },
  {
    path: "quiz/create",
    element: <CreateQuiz />,
  },
  {
    path: "quiz/:quizId",
    element: <Quiz />,
    loader: quizLoader,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
