import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return(
            
            <nav className="row navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <svg className="bi bi-columns-gap" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
                        </svg>
                        &nbsp;Ticket Booking
                    </Link>

                    <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto justify-content-right">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Create Booking Log</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

        );
    }
}