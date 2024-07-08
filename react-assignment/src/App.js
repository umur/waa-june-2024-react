import logo from './logo.svg';
import './App.css';
import Course from "./Course";
import ToggleList from "./ToggleList";

const courseList =[
  {id:1 , courseName: 'WAP', credit: '400',courseCode:"CSS-420"},
  {id:2 , courseName: 'WAA', credit: '500',courseCode:"CSS-520"},
  {id:3 , courseName: 'EA', credit: '500',courseCode:"CSS-530"},
  {id:4 , courseName: 'ASD', credit: '500',courseCode:"CSS-523"}
]
function App() {
  return (
      <div className="App">
        <ToggleList/>
        <table>
          {
            courseList.map((item)=>{
              return (
                  <Course
                      id={item.id}
                      courseName={item.courseName}
                      credit={item.credit}
                      courseCode={item.courseCode}
                  />
              )
            })
          }
        </table>
      </div>
  );
}

export default App;
