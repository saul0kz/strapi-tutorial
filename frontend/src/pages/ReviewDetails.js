import useFetch from "hooks/useFetch";
import React from "react";
import { useParams } from "react-router";

export default function ReviewDetails() {
  const { id } = useParams();

  const { loading, error, data } = useFetch(
    `http://localhost:1337/reviews/${id}`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error :()</p>;
  return (
    data && (
      <div>
        <div className="data-card">
          <div className="ratting">{data.rating}</div>
          <h2>{data.title}</h2>
          <small>console list</small>
          <p>{data.body.substring(0, 200)}...</p>
        </div>
      </div>
    )
  );
}
