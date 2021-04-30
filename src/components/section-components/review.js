import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class Review extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="client-review-area client-review-area-home pd-top-70">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="thumb wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
			          <div className="client-review-thumb">
			            <img src={publicUrl+"assets/img/destination-list/saiman.jpg" }alt="review" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="single-client-review wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
			          <p className="sub-title">Reseñas sobre viajes</p>
			          <h3 className="location-name">Burgos</h3>
			          <div className="tp-review-meta">
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="fa fa-star" />
			            <span>4.0</span>
			          </div>
			          <p>En primer lugar, ese breve contexto histórico: Burgos fue fundada como fortaleza en el año 884 y, durante la Guerra Civil española, fue la sede del gobierno de Franco. La ciudad está atravesada por el Camino de Santiago (vi a varias personas mayores con mochilas, qué bonito) y es famosa por ser rica en arte gótico. En este tema, la gran atracción es la Catedral de Santa María La Mayor de Burgos, más conocida simplemente como Catedral de Burgos. ¡Enorme y hermoso!</p>
			          <div className="media">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/destination-list/saiman2.jpg"} alt="client" />
			            </div>
			            <div className="media-body">
			              <h6>Simmons Moreno</h6>
			              <p>Estudiante Erasmus na Universidad de Valladolid</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Review