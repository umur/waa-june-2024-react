import logo from './logo.svg';
import './App.css';
import {CreateUser} from './CreateUser';
import {Display} from './DisplayAllUsers'

function App() {

  return(
      <div>
        <Display/>
        <CreateUser/>

      </div>
  );
}

export default App;
































// const catagoryList = [
//   {   id:'1 ',
//     name:'catagory 1 ',
//     productList:[{ id:'1   ', name:'Bags    ', price:100 , rating:4,
//       review:[{ id:'1 ', comment:'good    '},{id:'2', comment :'Not Good '}]},
//       { id:'2   ', name:'Shoes    ', price:150, rating:5,
//         review:[{ id:'3 ', comment:'Perfect   '},{id:'4', comment :'Great '}]},
//       { id:'3    ', name:'Accessories    ', price:50, rating:3,
//         review:[{ id:'5 ',comment:'Okay   '}]}]},
//   { id:'4 ',
//     name:'catagory 2 ',
//     productList:[{ id:'4   ', name:'Jackets    ', price:200, rating:4,
//       review:[{ id:'6 ', comment:'Good    '},{id:'7', comment :'Not Good '}]},
//       { id:'5   ', name:'Shirts    ', price:120, rating:5,
//         review:[{ id:'8 ', comment:'Perfect   '}]}]}
//
// ];
//
// const users = [
//   { id:'1', name:'John',lname:'dawit',email:'dawit@gmail.com',password:'dawit',
//     address: { street:'123 Main St', city:'New York', state:'NY', zip:10001,country:'US' },
//     review:[{ id:'22', comment:'Okay '},{id:'3', comment:'bad'}]},
//   { id:'2', name:'Jane',lname:'Doe',email:'jane@gmail.com',password:'jane',
//     address:{ street:'456 Elm St', city:'Los Angeles', state:'CA', zip:90001 ,country: 'US'},
//     review: [{id:33, comment: 'Good'},{id:34, comment: 'Not good'}]
//   },
//   { id:'3', name:'Bob',lname:'Smith',email:'bob@gmail.com',password:'bob',
//     address:{ street:'789 Oak St', city:'Chicago', state:'IL', zip:60601, country:'US'},
//     review:[{id:44, comment: 'Great'},{id:45, comment: 'Perfect'}]}
//
// ]
//
// return (
//     <div className="App">
//       <div>
//         {catagoryList.map(catagory=>(
//             <Category
//                 key={catagory.id}
//                 name={catagory.name}
//                 productList={catagory.productList.map(product=>(
//                     <Product
//                         key={product.id}
//                         id={product.id }
//                         name={product.name}
//                         price={product.price}
//                         rating={product.rating}
//                         review={product.review.map(review=>(
//                             <Review
//                                 key={review.id}
//                                 comment={review.comment}
//                             />
//                         ))}
//                     />
//                 ))}
//             />
//         ))}
//       </div>
//
//       <h1> User Lists</h1>
//
//       <div>
//         {users.map(user=>(
//             <User
//                 key={user.id}
//                 id={user.id}
//                 fname={user.name}
//                 lname={user.lname}
//                 email={user.email}
//                 password={user.password}
//                 address= {<Address key={user.address.id} id={user.address.id} street={user.address.street} city={user.address.city} state={user.address.state} zip={user.address.zip} country={user.address.country}/>}
//             />
//         ))}
//       </div>