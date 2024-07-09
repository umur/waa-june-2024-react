import logo from './logo.svg';
import './App.css';
import StudentForm from './components/students/StudentForm';
import CourseForm from './components/courses/CourseForm';
import CourseTable from './components/courses/CourseTable';
import StudentTable from './components/students/StudentTable';

function App() {
  return (
    <div className="App">
      <h1>Courses</h1>
      <CourseTable />
      <CourseForm/>
      <h1>Students</h1>
      <StudentTable />
      <StudentForm />
    </div>
  );
}

export default App;
