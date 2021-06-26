import axios from 'axios'
import React, { Component } from 'react'
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import TourDetails from './section-components/tour-details';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

class TourDetailsPage extends Component {

    state = {
        viaje: {}
    }

    async componentDidMount() {

        const res = await axios.get("https://adonisjs-api-vev.herokuapp.com/viajes/" + this.props.match.params.id)

        this.setState({ viaje: res.data })
        // console.log(res)
    }

    render() {
        return (
            <div>
                <Navbar />
                {
                    this.state.viaje !== undefined &&
                    <div>
                        <PageHeader headertitle={this.state.viaje.titulo} />
                        <TourDetails viaje={this.state.viaje} />
                    </div>
                }
                <Subscribe />
                <Footer />
            </div>
        )
    }
}

export default TourDetailsPage;