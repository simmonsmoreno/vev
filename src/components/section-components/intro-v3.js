import React, { Component } from 'react';
// import parse from 'html-react-parser';

class IntroV3 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<div className="intro-area pd-top-108">
				<div className="container">
					<div className="section-title text-lg-center text-left">
						<h2 className="title"><span>Somos el</span> punto de viajes</h2>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="single-intro style-two">
								<div className="thumb">
									<img src={publicUrl + "assets/img/icons/9.png"} alt="img" />
								</div>
								<h4 className="intro-title">Transporte privado</h4>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolores dolorum unde repellendus accusamus fugit quo fuga obcaecati sequi? Voluptatem mollitia eum alias sapiente quaerat debitis ipsum commodi perferendis in.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-intro style-two">
								<div className="thumb">
									<img src={publicUrl + "assets/img/icons/10.png"} alt="img" />
								</div>
								<h4 className="intro-title">Destinos variados</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nihil obcaecati doloribus aliquam. Nam incidunt facere fuga dignissimos fugit architecto quae recusandae adipisci, facilis fugiat illo aperiam accusamus atque ipsum?</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-intro style-two">
								<div className="thumb">
									<img src={publicUrl + "assets/img/icons/11.png"} alt="img" />
								</div>
								<h4 className="intro-title">Grandes hoteles</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptate cum culpa porro omnis dolor distinctio obcaecati quod tempora autem placeat voluptatem ex itaque, velit, dicta quasi eveniet similique atque!</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-intro style-two">
								<div className="thumb">
									<img src={publicUrl + "assets/img/icons/12.png"} alt="img" />
								</div>
								<h4 className="intro-title">Reserva rápida</h4>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus adipisci ad exercitationem beatae natus illum, laboriosam possimus aliquam quos accusantium nobis hic. Veritatis quis error quia sunt laborum, quae quisquam.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default IntroV3