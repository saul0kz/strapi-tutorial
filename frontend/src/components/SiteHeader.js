import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function SiteHeader() {
    return (
        <div className="site-header">
        <Link to="/">Home</Link> |{" "}    
        <Link to="/category">category</Link> |{" "}
        <Link to="/review-details">review-details</Link>
        <Outlet />
        </div>
    )
}
