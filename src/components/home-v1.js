// import { connect } from "react-redux";
import axios from 'axios'
import React, { Component } from 'react'
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Offer from './section-components/offer';
import Video from './section-components/video';
import HolidayPlan from './section-components/holiday-plan';
import Review from './section-components/review';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

class Home_V1 extends Component {

    state = {
        viajes: []
    }

    async componentDidMount() {
        
        const res = await axios.get("https://adonisjs-api-vev.herokuapp.com/viajes")

        this.setState({ viajes: res.data })
    }


    render() {
        return (
            <div>
                <div>
                    <Navbar />
                    <Banner />
                    <Offer viajes={this.state.viajes} />
                    <Video />
                    <HolidayPlan />
                    <Review />
                    <Subscribe />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Home_V1;