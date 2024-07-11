// import logo from './logo.svg';
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Persons from "./Persons";
import PersonDetail from "./PersonDetail";
import CreatePerson from "./CreatePerson";
import Courses from "./Courses";
import CourseDetail from "./CourseDetail";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="students">Students</Link>
        </li>
        <li>
          <Link to="/create-person">New Student</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/persons" element={<Persons />} />
        <Route path="/create-person/" element={<CreatePerson />} />
        <Route path="/person-detail/:id" element={<PersonDetail />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-detail/:id" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
