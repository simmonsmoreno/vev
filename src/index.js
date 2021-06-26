import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import HomeV1 from './components/home-v1';
import AboutUs from './components/about';
import TourList from './components/tour-list';
import TourDetails from './components/tour-details';
import Gallery from './components/gallery';
import GalleryDetails from './components/gallery-details';
import Contact from './components/contact';
import Error from './components/error';
import Reservar from './components/reservar';

import store from "./store";

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<HashRouter basename="/">
					<div>
						<Switch>
							<Route exact path="/" component={HomeV1} />
							<Route path="/about" component={AboutUs} />
							<Route path="/tour-list" component={TourList} />
							<Route path="/tour-details/:id" component={TourDetails} />
							<Route path="/gallery" component={Gallery} />
							<Route path="/gallery-details" component={GalleryDetails} />
							<Route path="/contact" component={Contact} />
							<Route path="/error" component={Error} />
							<Route path="/pago" component={Reservar} />
						</Switch>
					</div>
				</HashRouter>
			</Provider>
		)
	}
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('viaje'));
