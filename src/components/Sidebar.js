import React from 'react'

const Sidebar = () => {
    return (
            <aside className="sidebar">
                <nav className="nav pt-4">
                <div className="nav-head">
                  <h3 className="logo">DASHBOARD</h3>
                </div>
        
                <ul>
                    <li className="active"><a href="#">Overview</a></li>
                    <li><a href="#">Your data</a></li>
                    <li><a href="#">Your wishlist</a></li>
                    <li><a href="#">Learning</a></li>
                    <li><a href="#">Courses</a></li>
                </ul>
                </nav>
            </aside>
    )
}

export default Sidebar;
