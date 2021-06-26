import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = 'logo'
		// let anchor = '#'
		return (
			<nav className="navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top">
				<div className="container nav-container">
					<div className="responsive-mobile-menu">
						<div className="mobile-logo">
							<Link to="/">
								<img src={publicUrl + "assets/img/vev-logo.png"} alt={imgattr} />
							</Link>
						</div>
						<button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#tp_main_menu" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggle-icon">
								<span className="line" />
								<span className="line" />
								<span className="line" />
							</span>
						</button>
						<div className="nav-right-content">
							<ul className="pl-0">
								<li className="search">
									<i className="ti-search" />
								</li>
							</ul>
						</div>
					</div>
					<div className="collapse navbar-collapse" id="tp_main_menu">
						<div className="logo-wrapper desktop-logo">
							<Link to="/" className="main-logo">
								<img src={publicUrl + "assets/img/vev-logo-white.png"} alt="logo" />
							</Link>
							<Link to="/" className="sticky-logo">
								<img src={publicUrl + "assets/img/vev-logo.png"} alt="logo" />
							</Link>
						</div>
						<ul className="navbar-nav">
							<li>
								<Link to="/tour-list">Viajes</Link>
							</li>
							<li>
								<Link to="/gallery">Galeria</Link>
							</li>
							<li>
								<Link to="/tarjeta">Tarjeta</Link>
							</li>
							<li>
								<Link to="/contact">Contatos</Link>
							</li>
						</ul>
					</div>
					<div className="nav-right-content">
						<ul>
							<li className="search">
								<i className="ti-search" />
							</li>
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
				</div>
			</nav>

		)
	}
}


export default Navbar