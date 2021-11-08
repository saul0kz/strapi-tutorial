import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function SiteHeader() {
    return (
        <div className="site-header">
        <Link to="/">Home</Link>
        <Outlet />
        </div>
    )
}
