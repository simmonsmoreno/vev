import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class Pago extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<div className="user-profile-area pd-top-120 mb-5">
				<div className="container">
					<div className="row">
						<div className="row">
							<div className="tab-content user-tab-content">
								<div className="tab-pane fade show active" id="tabs_1">
									<div className="user-payment-method">
										<div className="location-review-area">
											<h3 className="user-details-title">Métodos de pago</h3>
											<form className="tp-form-wrap bg-gray tp-form-wrap-one">
												<div className="row">
													<div className="col-lg-7">
														<div className="single-widget-search-input-title"><i className="fa fa-user" /> Nombre</div>
														<div className="single-widget-search-input">
															<input type="text" placeholder="Nombre" />
														</div>
														<div className="single-widget-search-input-title"><i className="fa fa-envelope" /> Email</div>
														<div className="single-widget-search-input">
															<input type="text" placeholder="Email" />
														</div>
														<div className="single-widget-search-input-title"><i className="fa fa-phone" /> Telefono</div>
														<div className="single-widget-search-input">
															<input type="text" placeholder="Telefono" />
														</div>
														<label className="single-input-wrap">
															<span className="single-input-title">Número de tarjeta de crédito</span>
															<input type="text" />
														</label>
														<label className="single-input-wrap">
															<span className="single-input-title">Nombre del titular de la tarjeta</span>
															<input type="text" />
														</label>
														<label className="single-input-wrap">
															<span className="single-input-title">Fecha de caducidad (Ejemplo: 01/17)</span>
															<input type="text" />
														</label>
														<label className="single-input-wrap">
															<span className="single-input-title">Banco emisor</span>
															<input type="text" />
														</label>
													</div>
													<div className="col-lg-5">
														<div className="user-payment-card">
															<img src={publicUrl + "assets/img/others/16.png"} alt="img" />
															<span>Método de pago disponible:</span>
															<div className="payment-card">
																<i className="fa fa-cc-paypal" />
																<i className="fa fa-cc-visa" />
																<i className="fa fa-cc-mastercard" />
																<i className="fa fa-credit-card-alt" />
															</div>
														</div>
													</div>
												</div>
												<div className="text-lg-center text-left">
													<a className="btn btn-yellow" href="/#">Pagar <i className="fa fa-paper-plane" /></a>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Pago