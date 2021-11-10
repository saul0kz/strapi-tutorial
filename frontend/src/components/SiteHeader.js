import React from "react";
import { Link, Outlet } from "react-router-dom";

import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

export default function SiteHeader() {
  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error :()</p>;

  const { categories } = data;
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Ninja Reviwes</h1>{" "}
      </Link>
      <nav className="categories">
        <span> filter reviews by category: </span>
        {categories.map((category) => (
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
