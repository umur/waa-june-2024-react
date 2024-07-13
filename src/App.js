import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import "./App.css";
import Course from "./Course/Course";
import Student from "./Student/Student";
import CourseDetails from "./Course/CourseDetails";
import { Employee } from "./Employee";

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/courses/course" className="nav-link">
              Course
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/student" className="nav-link">
              Student
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* <Route path="/course" element={<Course />} /> */}
        <Route path="/student" element={<Student />} />
        {/* <Route path="/add-course" element={<AddCourse />} /> */}

        <Route path="/employees" element={<Employee />} />
        {/* <Route path="/courses/course-details/:id" element={<CourseDetails />} /> */}

        <Route path="/courses/*">
          <Route path="course" element={<Course />} />
          <Route path="course-details/:id" element={<CourseDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
