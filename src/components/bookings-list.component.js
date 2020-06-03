import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Booking = props => (
  <tr>
    <td>{props.booking.username}</td>
    <td>{props.booking.seatBooked}</td>
    <td>{props.booking.numberOfSeats}</td>
    <td>{props.booking.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.booking._id}>edit</Link> | <Link to={"#"} onClick={() => { props.deleteBooking(props.booking._id) }}>delete</Link>
    </td>
  </tr>
)

export default class BookingsList extends Component {
  constructor(props) {
    super(props);

    this.deleteBooking = this.deleteBooking.bind(this)

    this.state = {bookings: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/bookings/')
      .then(response => {
        this.setState({ bookings: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBooking(id) {
    axios.delete('http://localhost:5000/bookings/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        bookings: this.state.bookings.filter(el => el._id !== id)
    })
  }

  bookingList() {
    return this.state.bookings.map(currentbooking => {
      return <Booking booking={currentbooking} deleteBooking={this.deleteBooking} key={currentbooking._id}/>;
    })
  }

  render() {
    return (
      <div className="row">
        <h3>List of Ticket Bookings</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Booked seats</th>
              <th>Number of booked seats</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.bookingList() }
          </tbody>
        </table>
      </div>
    )
  }
}
