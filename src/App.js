import logo from './logo.svg';
import './App.css';
import AddButtom from './AddButtom';
import Student from './Student';
import Course from './Course';

function App() {
  return (
    <div className="App">
      <Student />
      <div style={{width: '50%'}}><Course /></div>
    </div>
    
  );
}

export default App;
