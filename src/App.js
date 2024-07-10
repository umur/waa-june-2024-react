import logo from './aaaaa-logo.jpg';
import './App.css';
import Student from './component/Students';
import Courses from './component/Courses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Student portal
        </p>
      </header>
      {/* <Student/> */}
      <Courses />
    </div>
  );
}

export default App;
