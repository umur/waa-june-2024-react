import logo from './logo.svg';
import './App.css';
import Category from './components/Category';
import Product from './components/Product';
import User from './components/User';
import Review from './components/Review';


function App() {
  const categories = [ {
      id: 1,
      name: 'Design',
    },
    {
      id: 2,
      name: 'Reader',
    },
    {
      id: 3,
      name: 'Video',
    },
  ];
  const products = [
    { id: 1, name: 'Photoshop', price: '$90.99', category: 'Design', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.' },
    { id: 2, name: 'Illustrator', price: '$60.99', category: 'Design', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.' },
    { id: 3, name: 'PDF Reader', price: '$6.99', category: 'Reader', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.' },
    { id: 4, name: 'Premiere El', price: '$249.99', category: 'Video', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.' },
    { id: 5, name: 'After Effect', price: '$299.99', category: 'Video', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.' },
  ];
  const users = [
    { id: 1, name: 'Jhon', email: 'test1@gmail.com', phone: '01711111111', address: 'Dhaka' },
    { id: 2, name: 'Doe', email: 'test2@gmail.com', phone: '01711111112', address: 'Dhaka' },
    { id: 3, name: 'Alex', email: 'test3@gmail.com', phone: '01711111113', address: 'Dhaka' },
    { id: 4, name: 'Smith', email: 'test4@gmail.com', phone: '01711111114', address: 'Dhaka' },
    { id: 5, name: 'Marry', email: 'test5@gmail.com', phone: '01711111115', address: 'Dhaka' },
  ];

  const reviews = [
    { id: 1, rating: 1, name: 'Jhon', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.' },
    { id: 2, rating: 1, name: 'Doe', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.' },
    { id: 3, rating: 2, name: 'Alex', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.' },
    { id: 4, rating: 3, name: 'Smith', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.' },
    { id: 5, rating: 4, name: 'Marry', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.' },
  ];

  return (
    <div className="App">
      <h2>Category:</h2>
      { categories.map(category => <Category key={category.id} category={category} />) }
      <h2>Product:</h2>
      { products.map(product => <Product key={product.id} product={product} />) }
      <h2>User:</h2>
      { users.map(user => <User key={user.id} user={user} />) }
      <h2>Review:</h2>
      { reviews.map(review => <Review key={review.id} review={review} />) }
    </div>
  );
}

export default App;
