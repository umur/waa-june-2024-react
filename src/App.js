import logo from './logo.svg';
import './App.css';
import Students from './components/Students';
import Courses from './components/Courses';

function App() {
  return (
    <div className="App">
      <h1>Student Course Registration</h1>
      <Students />
      <Courses />
    </div>
  );
}

export default App;
