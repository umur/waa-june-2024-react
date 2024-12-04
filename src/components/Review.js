import React from "react";


function Review ({review}) {
 return (
    <div>
      <div>Id: {review.id}</div>
      <div>Rating: {review.rating}</div>
      <div>Name: {review.name}</div>
      <div>Comment: {review.comment}</div>
    </div>
  );
}
export default Review;