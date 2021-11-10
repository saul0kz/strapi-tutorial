import React from "react";
import { useParams } from "react-router";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const CATEGORYREVIEWS = gql`
  query GetCategoryReviews($id: ID!) {
    category(id: $id) {
      name
      reviews {
        title
        body
        rating
        id
        categories {
          name
          id
        }
      }
    }
  }
`;
export default function Category() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(CATEGORYREVIEWS, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error :()</p>;
  const { category } = data;
  const { reviews } = category;
  return (
    <div>
      <h2>{category.name}</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>
          {review.categories.map(c => (
            <small>{c.name}</small>
          ))}

          <p>{review.body.substring(0, 200)}...</p>
          <Link to={`review-details/${review.id}`}>Read more </Link>
        </div>
      ))}
    </div>
  );
}
