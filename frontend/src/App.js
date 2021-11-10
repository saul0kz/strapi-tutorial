import { Routes, Route, BrowserRouter } from "react-router-dom";
import SiteHeader from "components/SiteHeader";
import React from "react";
import "./App.css";
import Homepage from "pages/Homepage";
import Category from "pages/Category";
import ReviewDetails from "pages/ReviewDetails";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="category/:id" element={<Category />} />
            <Route path="review-details/:id" element={<ReviewDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
