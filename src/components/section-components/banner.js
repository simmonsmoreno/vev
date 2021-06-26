// import { connect } from "react-redux";
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Banner extends Component {

	render() {

		// const { viajes } = this.props.viajes

		return <div className="banner-area viaje-go-top">
			<div className="banner-slider">
				{
					// viajes.map(viaje => (
					// 	<div className="banner-slider-item banner-bg-1" key={viaje.id}>
					// 		<div className="container">
					// 			<div className="row">
					// 				<div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
					// 					<div className="row">
					// 						<div className="col-lg-9 col-sm-8">
					// 							<div className="banner-inner shadow-lg p-3 mb-5">
					// 								<h3 className="text-light s-animate-1">viaje a</h3>
					// 								<h2 className="banner-title s-animate-2">{viaje.titulo}</h2>
					// 								{/* <h2 className="text-light s-animate-1">21 &euro;</h2> */}
					// 							</div>
					// 						</div>
					// 						{/* <div className="col-lg-3 col-sm-4">
					// 					<div className="video-popup-btn s-animate-video">
					// 						<a href="https://www.youtube.com/watch?v=Cw1tHpFotMk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
					// 					</div>
					// 				</div> */}
					// 						<div className="col-lg-12 banner-tour-package">
					// 							<div className="row">
					// 								<div className="col-sm-4 s-animate-3">
					// 									<div className="tp-price-meta">
					// 										<p>Precio</p>
					// 										<h2>{viaje.precio} <small>&euro;</small></h2>
					// 										{/* <p className="tp-price-meta-details">7 Days Tour <span>on 2 person</span></p> */}
					// 									</div>
					// 								</div>
					// 								<div className="col-sm-4 s-animate-5">
					// 									<div className="tp-price-meta">
					// 										{/* <p>sabado</p> */}
					// 										<h2>
					// 											{
					// 												new Date(viaje.fecha).toLocaleString('es', { month: 'long', day: 'numeric' })
					// 											}
					// 										</h2>
					// 										{/* <p className="tp-price-meta-details">September <span>or later</span></p> */}
					// 									</div>
					// 								</div>
					// 								<div className="col-sm-4 s-animate-4">
					// 									<div className="tp-price-meta">
					// 										<ul className="top-bar-btn-booking">
					// 											<Link className="btn btn-light" to="/tour-details">Reservar <i className="fa fa-paper-plane" /></Link>
					// 										</ul>
					// 									</div>
					// 								</div>
					// 							</div>
					// 						</div>
					// 					</div>
					// 				</div>
					// 			</div>
					// 		</div>
					// 	</div>
					// ))
				}
				<div className="banner-slider-item banner-bg-3">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
								<div className="row">
									<div className="col-lg-9 col-sm-8">
										<div className="banner-inner">
											<p className="banner-cat s-animate-1">Viajes Erasmus Valladolid</p>
											<h2 className="banner-title s-animate-2">Bienvenidos <br /> a nuestra Web</h2>
										</div>
									</div>
									<div className="col-lg-3 col-sm-4">
										<div className="video-popup-btn s-animate-video">
											<a href="https://www.youtube.com/watch?v=FZZRH-oG-tM" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="banner-social-meta">
				<div className="banner-slider-dots" />
				<ul className="social-icon">
					<li>
						<a className="facebook" href="https://www.facebook.com/viajeserasmusvalladolid2019" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook  " /></a>
					</li>
					<li>
						<a className="pinterest" href="https://www.instagram.com/viajeserasmusvalladolid/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a>
					</li>
					<li>
						<a className="twitter" href="https://www.youtube.com/channel/UCBSWv_nKhphzKUwtQT2Kr2A" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube  " /></a>
					</li>
					<li>
						<a className="twitter" href="https://api.whatsapp.com/send?phone=0034685831143&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestras%20viajes." target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" /></a>
					</li>
				</ul>
			</div> */}
			{/* <div className="container">
				<div className="banner-slider-controls">
					<div className="slider-nav tp-control-nav" />
					slider-nav
					<div className="tp-slider-extra slider-extra">
						<div className="text">
							<span className="first">01</span>
							<span className="devider">/</span>
							<span className="last" />
						</div>
					</div>
					slider-extra
				</div>
			</div> */}
		</div>
	}
}

// const mapStateToProps = state => ({
// 	viajes: state.viajes
// });

export default Banner;
// (
// 	mapStateToProps,
// 	null
// )(Banner);