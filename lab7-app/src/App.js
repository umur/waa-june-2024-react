import './App.css';
import Course from "./Course";
import Student from "./Student";
function App() {
    const courses = [
        {id:1,name:"WAA",code:"123"},
        {id:2,name:"WAP",code:"456"},
    ];

    const students = [
        {id:1,firstName:"gg",lastName:"hh",email:"gh@miu.edu",major:"compro",gpa:4,coursesTaken:courses},
        {id:2,firstName:"aa",lastName:"bb",email:"ab@miu.edu",major:"compro",gpa:4,coursesTaken:[]}
    ]
  return (
    <div>
        <h1>Course Lists</h1>
        <Course courses={courses}></Course>
        <br/>
        <h1>Student Lists</h1>
        <Student students={students}></Student>
    </div>
  );
}

export default App;
