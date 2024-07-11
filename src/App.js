import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Student from './component/Students';
import Courses from './component/Courses';
import ApiClient from "../src/services/api-client";
import NavBar from './component/common/NavBar';
import CourseDetail from "./component/Courses/CourseDetails";

function App() {

  return (
    <div className="App">
     <NavBar/>

      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-detail/:id" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
