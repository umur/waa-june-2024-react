import logo from './logo.svg';
import './App.css';
import AddButtom from './AddButtom';
import Student from './Student';
import Course from './Course';
import { Link, Route, Routes } from 'react-router-dom';
import AddStudent from './AddStudent';
import AddCourse from './AddCourse';

function App() {
  return (
    <>
      <h3><Link to='/Student'>All Students</Link></h3>
      <h3><Link to='/Course'>All Courses</Link></h3>

      <Routes>
        <Route path='/Student' element={<Student />} />
        <Route path='/Course' element={<Course />} />
        <Route path='/AddStudent' element={<AddStudent />} />
        <Route path='/AddCourse' element={<AddCourse />} />
      </Routes>
      {/* <div className="App">
        <Student />
        <div style={{ width: '50%' }}><Course /></div>
      </div> */}
    </>

  );
}

export default App;
