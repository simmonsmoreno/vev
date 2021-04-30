import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		// let imgattr = "Footer logo"

		return (
			<footer className="footer-area" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/2.png)' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="footer-widget widget">
								<div className="about_us_widget">
									<Link to="/" className="footer-logo">
										<img src={publicUrl + "assets/img/vev-logo-white.png"} alt="footer logo" />
									</Link>
									<p>Creemos que la interacción con la marca es la clave de la comunicación. Las innovaciones reales y la experiencia positiva del cliente son el núcleo de una comunicación exitosa.</p>
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
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="footer-widget widget ">
								<div className="widget-contact">
									<h4 className="widget-title">Donde estamos</h4>
									<p>
										<i className="fa fa-map-marker" />
										<span>Calle Nicasio Pereze, 16 C.P. 47005 - Valladolid (Espanha) </span>
									</p>
									<p className="location">
										<i className="fa fa-envelope-o" />
										<span>fernando.viajeserasmus@gmail.com</span>
									</p>
									<p className="telephone">
										<a href="https://api.whatsapp.com/send?phone=0034685831143&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestras%20viajes." target="_blank" rel="noopener noreferrer"> 
											<i className="fa fa-whatsapp" />
											<span>
												+34 685 83 11 43
											</span>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright-inner">
					<div className="copyright-text">
						© Viajes Erasmus Valladolid 2021 All rights reserved. Powered with <i className="fa fa-heart" /> by <a href="https://www.instagram.com/thesimmons__/" target="_blank" rel="noopener noreferrer"><span>@thesimmons.</span></a>
					</div>
				</div>
			</footer>
		)
	}
}


export default Footer_v1