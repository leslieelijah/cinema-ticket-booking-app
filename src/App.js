import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import BookingsList from './components/bookings-list.component';
import EditBookings from './components/edit-bookings.component';
import CreateBookings from './components/create-bookings.component';
import CreateUser from './components/create-user.component';

function App() {
    return ( 
        <Router>
            <div className="container-fluid">

                <Navbar />
                <br />
                <Route path="/" exact component={BookingsList} />
                <Route path="/edit/:id" component={EditBookings} />
                <Route path="/create" component={CreateBookings} />
                <Route path="/user" component={CreateUser} />
                
            </div> 

        </Router>
    );
}

export default App;
