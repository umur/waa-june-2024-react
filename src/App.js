import './App.css';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import ReviewList from './components/ReviewList';

function App() {
  return (
    <div className="App">
      <main>
        <CategoryList />
        <ProductList />
        <UserList />
        <ReviewList />
      </main>
    </div>
  );
}

export default App;
