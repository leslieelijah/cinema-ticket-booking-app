import React, { Component } from 'react';

export default class TheatreSeatLayout extends Component {
    render() {

        return(
            <div className="theatre">
            <h3>Theatre seats</h3>
            <div className="cinema-seats left">
                <div className="cinema-row row-1">
                    <div className="seat" value="1">1</div>
                    <div className="seat">11</div>
                    <div className="seat">21</div>
                </div>

                <div className="cinema-row row-2">
                    <div className="seat">2</div>
                    <div className="seat">12</div>
                    <div className="seat">22</div>
                </div>

                <div className="cinema-row row-3">
                    <div className="seat">3</div>
                    <div className="seat">13</div>
                    <div className="seat">23</div>
                </div>

                <div className="cinema-row row-4">
                    <div className="seat">4</div>
                    <div className="seat">14</div>
                    <div className="seat">24</div>
                </div>

                <div className="cinema-row row-5">
                    <div className="seat">5</div>
                    <div className="seat">15</div>
                    <div className="seat">25</div>
                </div>

                <div className="cinema-row row-6">
                    <div className="seat">6</div>
                    <div className="seat">16</div>
                    <div className="seat">26</div>
                </div>

                <div className="cinema-row row-7">
                    <div className="seat">7</div>
                    <div className="seat">17</div>
                    <div className="seat">27</div>
                </div>
                </div>


                <div className="cinema-seats right">
                <div className="cinema-row row-1">
                    <div className="seat">8</div>
                    <div className="seat">18</div>
                    <div className="seat">28</div>
                </div>

                <div className="cinema-row row-2">
                    <div className="seat">9</div>
                    <div className="seat">19</div>
                    <div className="seat">29</div>
                </div>

                <div className="cinema-row row-3">
                    <div className="seat">10</div>
                    <div className="seat">20</div>
                    <div className="seat">30</div>
                </div>

                </div>

            </div>

            
        );
    }
}