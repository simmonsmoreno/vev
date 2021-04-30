import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class Offer extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<div className="offer-area pd-top-70">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-8">
							<div className="section-title text-center">
								<h2 className="title">Ofertas &amp; Descuentos Especiales</h2>
								<p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
							</div>
						</div>
					</div>
				</div>
				<div className="destinations-list-slider-bg">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
								<div className="destinations-list-slider">
									<div className="d-list-slider-item">
										<div className="single-destinations-list text-center">
											<div className="thumb">
												<span className="d-list-tag">Special Offer</span>
												<img src={publicUrl + "assets/img/destination-list/madrid-2.jpg"} alt="list" />
												<div className="d-list-btn-wrap">
													<div className="d-list-btn viaje-go-top">
														<Link className="btn btn-yellow" to="/tour-details">Reserva Ahorra <i className="fa fa-paper-plane" /></Link>
													</div>
												</div>
											</div>
											<div className="details">
												<h4 className="title">Madrid</h4>
												<p className="content">Capital y mayor ciudad de España</p>
												<ul className="tp-list-meta border-bt-dot">
													<li><i className="fa fa-calendar-o" /> 15 de mayo</li>
													<li><i className="fa fa-clock-o" /> 1 day</li>
													{/* <li><i className="fa fa-star" /> 4.3</li> */}
												</ul>
												<div className="tp-price-meta tp-price-meta-cl">
													<p>Precio</p>
													<h2>21 <small>&euro;</small></h2>
													{/* <del>21<span>&euro;</span></del> */}
												</div>
											</div>
										</div>
									</div>
									<div className="d-list-slider-item">
										<div className="single-destinations-list text-center">
											<div className="thumb">
												{/* <span className="d-list-tag">Special Offer</span> */}
												<img src={publicUrl + "assets/img/destination-list/bilbau-1.jpg"} alt="list" />
												<div className="d-list-btn-wrap">
													<div className="d-list-btn viaje-go-top">
														<Link className="btn btn-yellow" to="/tour-details">Reserva Ahorra <i className="fa fa-paper-plane" /></Link>
													</div>
												</div>
											</div>
											<div className="details">
												<h4 className="title">Bilbao</h4>
												<p className="content">Capital de la provincia y territorio histórico de Bizkaia.</p>
												<ul className="tp-list-meta border-bt-dot">
													<li><i className="fa fa-calendar-o" /> 16 de mayo</li>
													<li><i className="fa fa-clock-o" /> 1 day</li>
													{/* <li><i className="fa fa-star" /> 4.3</li> */}
												</ul>
												<div className="tp-price-meta tp-price-meta-cl">
													<p>Precio</p>
													<h2>26 <small>&euro;</small></h2>
													{/* <del>21<span>&euro;</span></del> */}
												</div>
											</div>
										</div>
									</div>
									<div className="d-list-slider-item">
										<div className="single-destinations-list text-center">
											<div className="thumb">
												<span className="d-list-tag">Special Offer</span>
												<img src={publicUrl + "assets/img/destination-list/parque-werner-2.jpg"} alt="list" />
												<div className="d-list-btn-wrap">
													<div className="d-list-btn viaje-go-top">
														<Link className="btn btn-yellow" to="/tour-details">Reserva Ahorra <i className="fa fa-paper-plane" /></Link>
													</div>
												</div>
											</div>
											<div className="details">
												<h4 className="title">Parque Warner</h4>
												<p className="content">Parque temático ubicado en Madrid, España. </p>
												<ul className="tp-list-meta border-bt-dot">
													<li><i className="fa fa-calendar-o" /> 22 de mayo</li>
													<li><i className="fa fa-clock-o" /> 1 day</li>
													{/* <li><i className="fa fa-star" /> 4.3</li> */}
												</ul>
												<div className="tp-price-meta tp-price-meta-cl">
													<p>Precio</p>
													<h2>45 <small>&euro;</small></h2>
													{/* <del>21<span>&euro;</span></del> */}
												</div>
											</div>
										</div>
									</div>
									<div className="d-list-slider-item">
										<div className="single-destinations-list text-center">
											<div className="thumb">
												{/* <span className="d-list-tag">Special Offer</span> */}
												<img src={publicUrl + "assets/img/destination-list/san-sebastian-3.jpg"} alt="list" />
												<div className="d-list-btn-wrap">
													<div className="d-list-btn viaje-go-top">
														<Link className="btn btn-yellow" to="/tour-details">Reserva Ahorra <i className="fa fa-paper-plane" /></Link>
													</div>
												</div>
											</div>
											<div className="details">
												<h4 className="title">San Sebastian</h4>
												<p className="content">Ciudad turística del Golfo de Vizcaya</p>
												<ul className="tp-list-meta border-bt-dot">
													<li><i className="fa fa-calendar-o" /> 23 de mayo</li>
													<li><i className="fa fa-clock-o" /> 1 day</li>
													{/* <li><i className="fa fa-star" /> 4.3</li> */}
												</ul>
												<div className="tp-price-meta tp-price-meta-cl">
													<p>Precio</p>
													<h2>26 <small>&euro;</small></h2>
													{/* <del>21<span>&euro;</span></del> */}
												</div>
											</div>
										</div>
									</div>
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

export default Offer