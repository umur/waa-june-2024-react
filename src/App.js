import logo from './logo.svg';
import './App.css';
import { Student } from './Student';

function App() {
  const courseList = [
    { id: 1, name: 'EA', code: '544' },
    { id: 2, name: 'WAA', code: '525' },
    { id: 3, name: 'MPP', code: '420' }
    ];
  
    const students = [
      { id: 1, fname: 'John', lname: 'Doe', email: 'john@miu.edu', major: 'CS', gpa: 3.5, courses: courseList },
      { id: 2, fname: 'Jane', lname: 'Doe', email: 'jane@miu.edu', major: 'CS', gpa: 3.6, courses: courseList },
      { id: 3, fname: 'Jimeo', lname: 'Doe', email: 'jime@miu.edu', major: 'CS', gpa: 3.7, courses: courseList }
  
    ];
  
    return (
      <div className="App">
  
  
        <h2>Student List</h2>
        {
          students.map((student)=>{
            return <Student key={student.id} fname={student.fname} lname={student.lname} email={student.email} major={student.major} gpa={student.gpa} courses={student.courses} />
          })
        }
  
      </div>
    );
}

export default App;
