import StudentDashboard from "./Pages/StudentDashboard/StudentDashboard";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminStudentsPage from "./Pages/AdminStudentsPage/AdminStudentsPage";
import RegisterStudent from "./Pages/RegisterStudent/RegisterStudent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StudentDashboard/>}/>
        <Route path="admin" element={<AdminDashboard/>}/>
        <Route path="admin/students" element={<AdminStudentsPage/>}/>
        <Route path="admin/register" element={<RegisterStudent/>}/>
     </Routes>
    </div>
  );
}

export default App;
