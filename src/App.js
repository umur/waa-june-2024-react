import './App.css';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import ReviewList from './components/ReviewList';
import axios from 'axios';
import CourseList from './components/lab2/CourseList';
import StudentList from './components/lab2/StudentList';

function App() {
    axios.defaults.baseURL = 'http://localhost:8080';

    return (
        <div className="App">
            <main>
                {/*
                    <CategoryList />
                    <ProductList />
                    <UserList />
                    <ReviewList />
                */}

                <h1>Course and Student Management</h1>
                <CourseList />
                <StudentList />
            </main>
        </div>
    );
}

export default App;
