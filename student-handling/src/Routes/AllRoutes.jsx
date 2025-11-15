import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
// import DashBoard from "../Components/DashBoard";
import EditStudents from "../Components/Students/EditStudents";
import Reports from "../Components/Reports";
import TeacherLogin from "../Components/TeacherAuth/TeacherLogin";
import TeacherSignup from "../Components/TeacherAuth/teacherSignup";
import Students from "../Components/Students/Students";
import AllStudents from "../Components/Students/AllStudents";
import AddStudents from "../Components/Students/AddStudents";
import ViewStudent from "../Components/Students/ViewStudent";
import DashBoard from "../Components/Dashboard/DashBoard";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<TeacherLogin />} />
        <Route path="/signup" element={<TeacherSignup />} />
        <Route path="/dashboard" element={<DashBoard />} />

        <Route path="/students/*" element={<Students />}>
          <Route index element={<AllStudents />} />
          <Route path="add-students" element={<AddStudents />} />
          <Route path="view-student/:id" element={<ViewStudent />} />
        </Route>
        <Route path="/reports" element={<Reports />} />
        <Route path="/edit-student/:id" element={<EditStudents />} />

      </Routes>
    </>
  );
}

export default AllRoutes;
