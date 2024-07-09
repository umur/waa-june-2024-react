import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Course from "./Course/Course";
import Student from "./Student/Student";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/course" className="nav-link">
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
          <Route path="/course" element={<Course />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
