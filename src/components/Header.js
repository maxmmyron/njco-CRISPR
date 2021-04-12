import React from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <h1 className="header-title">My App</h1>
            </Link>
            <ul className="header-links">
                <Link to="/about">
                    <li className="header-link">Page 1</li>
                </Link>
                <Link to="/explore">
                    <li className="header-link">Page 2</li>
                </Link>
            </ul>
        </div>
    )
}
