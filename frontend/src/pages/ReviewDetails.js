import React from "react";
import { useParams } from "react-router";

import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      title
      body
      rating
      id
      categories {
        name
      }
    }
  }
`;

export default function ReviewDetails() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error :()</p>;
  const { review } = data;
  return (
    review && (
      <div>
        <div className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>
          <small>console list</small>
          <p>{review.body}</p>
        </div>
      </div>
    )
  );
}
