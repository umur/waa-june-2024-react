import logo from './logo.svg';
import './App.css';
import Student from './components/lab8/Student';
import Course from './components/lab8/Course';


function App() {

  return (
    <div className="App">
      <h1>Student:</h1>
      <Student />

      <h1>Course:</h1>
      <Course />
    </div>
  );
}

export default App;
