import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import TheatreSeatLayout from './theatre-seat-layout.component';
import $ from 'jquery';

export default class CreateBookings extends Component {

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeSeatBooked = this.onChangeSeatBooked.bind(this);
        this.onChangeNumberOfSeats = this.onChangeNumberOfSeats.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            seatBooked: '',
            numberOfSeats: '',
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
            this.setState({
                users: response.data.map(user => user.username),
                username: response.data[0].username
            })
            }
        })
        .catch((error) => {
            console.log(error);
        })

        $('.cinema-seats .seat').on('click', function() {
            $(this).toggleClass('active');
        });

        console.log(this.state.seatBooked);
    
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeSeatBooked(e) {
        this.setState({
            seatBooked: e.currentTarget.textContent
        });
    }

    onChangeNumberOfSeats(e) {
        this.setState({
            numberOfSeats: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const booking = {
            username: this.state.username,
            seatBooked: this.state.seatBooked,
            numberOfSeats: this.state.numberOfSeats,
            date: this.state.date
        }

        console.log(booking);

        axios.post('http://localhost:5000/bookings/add', booking)
        .then(res => console.log(res.data));

        // window.location = '/';
    }

    render() {

        return(
            <div>
            <h3>Create New Booking Log</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                      this.state.users.map(function(user) {
                        return <option 
                          key={user}
                          value={user}>{user}
                          </option>;
                      })
                    }
                </select>
              </div>
              <div className="form-group"> 
                    <TheatreSeatLayout 
                    value={this.state.numberOfSeats}
                    onChange={this.onChangeNumberOfSeats}
                    />
              </div>
              <div className="form-group">
                <label>Number of Seats: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.numberOfSeats}
                    onChange={this.onChangeNumberOfSeats}
                    />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" value="Create Booking Log" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}