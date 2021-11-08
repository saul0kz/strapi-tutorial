import useFetch from "hooks/useFetch";
import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { loading, error, data } = useFetch("http://localhost:1337/reviews");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error :()</p>;
  return (
    <div>
      {data?.map((review) => (
        <div key={review.id} className="review-card">
          <div className="ratting">{review.rating}</div>
          <h2>{review.title}</h2>
          <small>console list</small>
          <p>{review.body.substring(0,200)}...</p>
          <Link to={`review-details/${review.id}`}>Read more </Link>
        </div>
      ))}
    </div>
  );
}
