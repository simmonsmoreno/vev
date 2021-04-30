import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class HolidayFun extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<div className="holiday-plan-area tp-holiday-plan-area mg-top-96" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/8.png)' }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-9">
							<div className="section-title text-center">
								<h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Viajes anteriores</h2>
								<p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">No vis fastidii accumsan, ignota postulant ea mea. Vis et prima integre, ei vis ridens moderatius reformidans cu vim doctus accumsan ignota.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-sm-6">
							<div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
								<Link to="/tour-details">
									<div className="thumb">
										<img src={publicUrl + "assets/img/destination-list/salamanca-1.jpg"} alt="list" />
									</div>
									<div className="details">
										<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Catilla y Leon</p>
										<h4 className="title">Salamanca</h4>
										<p className="content">27 de febrero de 2021</p>
										{/* <div className="tp-price-meta">
										<h2>620 <small>$</small></h2>
									</div> */}
									</div>
								</Link>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
								<Link to="/tour-details">
									<div className="thumb">
										<img src={publicUrl + "assets/img/destination-list/segovia-1.jpg"} alt="list" />
									</div>
									<div className="details">
										<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Catilla y Leon</p>
										<h4 className="title">Segovia</h4>
										<p className="content">06 de Marzo de 2021</p>
										{/* <div className="tp-price-meta">
										<h2>620 <small>$</small></h2>
									</div> */}
									</div>
								</Link>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
								<Link to="/tour-details">
									<div className="thumb">
										<img src={publicUrl + "assets/img/destination-list/leon-1.jpg"} alt="list" />
									</div>
									<div className="details">
										<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Catilla y Leon</p>
										<h4 className="title">Leon y Astorgas</h4>
										<p className="content">20 de Marzo de 2021</p>
										{/* <div className="tp-price-meta">
										<h2>620 <small>$</small></h2>
									</div> */}
									</div>
								</Link>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
								<Link to="/tour-details">
									<div className="thumb">
										<img src={publicUrl + "assets/img/destination-list/burgos-1.jpg"} alt="list" />
									</div>
									<div className="details">
										<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Catilla y Leon</p>
										<h4 className="title">Burgos</h4>
										<p className="content">10 de Abril de 2021</p>
										{/* <div className="tp-price-meta">
										<h2>620 <small>$</small></h2>
									</div> */}
									</div>
								</Link>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
								<Link to="/tour-details">
									<div className="thumb">
										<img src={publicUrl + "assets/img/destination-list/zamora-1.jpg"} alt="list" />
									</div>
									<div className="details">
										<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Catilla y Leon</p>
										<h4 className="title">Zamora y Toro</h4>
										<p className="content">17 de Abril de 2021</p>
										{/* <div className="tp-price-meta">
										<h2>620 <small>$</small></h2>
									</div> */}
									</div>
								</Link>
							</div>
						</div>
					
					</div>
				</div>
			</div>
		)
	}
}

export default HolidayFun