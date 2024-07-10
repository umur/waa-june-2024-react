import logo from './aaaaa-logo.jpg';
import './App.css';
import Student from './component/Students';
import Courses from './component/Courses';
import ApiClient from "../src/services/api-client";
import { useEffect, useState } from 'react';

function App() {
  const [courses, setCourses] = useState();
  const apiClient = new ApiClient("/courses");

  useEffect( () => {
    getAllCourses()
  }, [])
  const getAllCourses = async () => {
    return await apiClient.getAll()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Student portal
        </p>
      </header>
      <Student/>
      {/* <Courses /> */}
    </div>
  );
}

export default App;
