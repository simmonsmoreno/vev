// import { connect } from "react-redux";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Offer extends Component {

	state = {
        viajes: []
    }

	async componentWillReceiveProps(props) {
        // this.props.getViajes();

		// console.log(props.viajes)
        this.setState({ viajes: props.viajes })
    }

	render() {

		// const { viajes } = this.props.viajes

		return (
			<div className="offer-area pd-top-70">
				<div className="destinations-list-slider-bg">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
								<div className="destinations-list-slider">
									{
										this.state.viajes.length && this.state.viajes.map(viaje => (
											<div className="d-list-slider-item" key={viaje.id}>
												<div className="single-destinations-list text-center">
													<div className="thumb">
														{/* <span className="d-list-tag">Special Offer</span> */}
														<img src={viaje.url} alt="list" width={512} height={181}/>
														<div className="d-list-btn-wrap">
															<div className="d-list-btn viaje-go-top">
																<Link className="btn btn-yellow" to={"/tour-details/" + viaje.id}>Reserva Ahorra <i className="fa fa-paper-plane" /></Link>
															</div>
														</div>
													</div>
													<div className="details">
														<h4 className="title">{viaje.titulo}</h4>
														{/* <p className="content">{viaje.descricion.slice(0,30)}...</p> */}
														<ul className="tp-list-meta border-bt-dot">
															<li><i className="fa fa-calendar-o" /> {
																new Date(viaje.fecha).toLocaleString('es', {month: 'long', day: 'numeric'})
															}</li>
															<li><i className="fa fa-clock-o" /> {viaje.hora}</li>
															{/* <li><i className="fa fa-star" /> 4.3</li> */}
														</ul>
														<div className="tp-price-meta tp-price-meta-cl">
															<p>Precio</p>
															<h2>{viaje.precio} <small>&euro;</small></h2>
															{/* <del>21<span>&euro;</span></del> */}
														</div>
													</div>
												</div>
											</div>
										))
									}
								</div>
							</div>
							<div className="col-lg-2 align-self-center order-lg-11">
								<div className="container">
									<div className="destinations-slider-controls">
										<div className="slider-nav tp-control-nav" />
										{/*slider-nav*/}
										<div className="tp-slider-extra slider-extra">
											<div className="text">
												<span className="first">01 </span>
												<span className="last" />
											</div>
											{/*text*/}
											<div className="d-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
												<span className="slider__label sr-only" />
											</div>
										</div>
										{/*slider-extra*/}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>)
	}
}

// const mapStateToProps = state => ({
//     viajes: state.viajes
// });

export default Offer;
// (
//     mapStateToProps,
//     null
// )(Offer);