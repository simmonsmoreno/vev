import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class Banner extends Component {

	render() {

		// let publicUrl = process.env.PUBLIC_URL+'/'
		// let imagealt = 'image'

		return <div className="banner-area viaje-go-top">
			<div className="banner-slider">
				<div className="banner-slider-item banner-bg-1">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
								<div className="row">
									<div className="col-lg-9 col-sm-8">
										<div className="banner-inner">
											<h3 className="text-light s-animate-1">sabado 15 de mayo</h3>
											<h2 className="banner-title s-animate-2">MADRID</h2>
											<h2 className="text-light s-animate-1">21 &euro;</h2>
										</div>
									</div>
									<div className="col-lg-3 col-sm-4">
										<div className="video-popup-btn s-animate-video">
											<a href="https://www.youtube.com/watch?v=Cw1tHpFotMk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="banner-slider-item banner-bg-2">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
								<div className="row">
									<div className="col-lg-9 col-sm-8">
										<div className="banner-inner">
											<h3 className="text-light s-animate-1">domingo 16 de mayo</h3>
											<h2 className="banner-title s-animate-2">BILBAO</h2>
											<h2 className="text-light s-animate-1">26 &euro;</h2>
										</div>
									</div>
									<div className="col-lg-3 col-sm-4">
										<div className="video-popup-btn s-animate-video">
											<a href="https://www.youtube.com/watch?v=oNMhcxGMIIk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="banner-slider-item banner-bg-3">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
								<div className="row">
									<div className="col-lg-9 col-sm-8">
										<div className="banner-inner">
											<p className="banner-cat s-animate-1">Viajes Erasmus Valladolid</p>
											<h2 className="banner-title s-animate-2">Bem-vindo <br /> a nossa Web</h2>
										</div>
									</div>
									<div className="col-lg-3 col-sm-4">
										<div className="video-popup-btn s-animate-video">
											<a href="https://www.youtube.com/watch?v=Quon7oyy60A" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="banner-social-meta">
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
			</div>
			<div className="container">
				<div className="banner-slider-controls">
					<div className="slider-nav tp-control-nav" />
					{/*slider-nav*/}
					<div className="tp-slider-extra slider-extra">
						<div className="text">
							<span className="first">01</span>
							<span className="devider">/</span>
							<span className="last" />
						</div>
					</div>
					{/*slider-extra*/}
				</div>
			</div>
		</div>
	}
}

export default Banner