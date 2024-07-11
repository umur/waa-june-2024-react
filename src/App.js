import './App.css';
import About from './About';
import {Route, Routes} from 'react-router-dom';
import {Home} from "./Home";
import { CourseDetail } from './CourseDetail';

function App() {
    return (
        <div className="App">

            <nav className="sticky-nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>

                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/coursedetail/:id" element={<CourseDetail />} />
            </Routes>

        </div>
    );
}

export default App;
