/**
 * Page.js - a container Class for pages
 */

import React from 'react'
import "./css/Page.css"

export default function Page(props) {
    return (
        <div className="page">
            {props.children}
        </div>
    )
}
