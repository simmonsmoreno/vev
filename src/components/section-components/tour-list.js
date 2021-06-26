import { connect } from "react-redux";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getViajes } from "../../store/actions/viajes";

class TourList extends Component {

  componentDidMount() {
    this.props.getViajes();
  }

  render() {

    const { viajes } = this.props.viajes

    let publicUrl = process.env.PUBLIC_URL + '/'
    // let imagealt = 'image'

    return <div className="tour-list-area pd-top-120 viaje-go-top">
      <div className="container">
        <div className="row">
          {
            viajes.map(viaje => (
              <div className="col-lg-6" key={viaje.id}>
                <Link to={"/tour-details/" + viaje.id}>
                  <div className="single-destinations-list style-four">
                    <div className="blur-thumb" style={{ backgroundImage: `${viaje.url}` }} />
                    <div className="details">
                      <div className="tp-review-meta">
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="fa fa-star" />
                        <span>4.0</span>
                      </div>
                      <p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />{viaje.titulo}</p>
                      <h4 className="title">{viaje.titulo}</h4>
                      <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                      <div className="list-price-meta">
                        <ul className="tp-list-meta d-inline-block">
                          <li><i className="fa fa-calendar-o" />
                            {
                              new Date(viaje.fecha).toLocaleString('es', { month: 'long', day: 'numeric' })
                            }
                          </li>
                        </ul>
                        <div className="tp-price-meta d-inline-block">
                          <p>Precio</p>
                          <h2>{viaje.precio} <span>	&euro;</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
          <div className="col-lg-12 text-md-center text-left">
            <div className="tp-pagination text-md-center text-left d-inline-block mt-4">
              <ul>
                <li><span className="prev page-numbers"><i className="la la-long-arrow-left" /></span></li>
                <li><span className="page-numbers current">1</span></li>
                <li><span className="page-numbers">2</span></li>
                <li><span className="page-numbers">3</span></li>
                <li><span className="page-numbers">4</span></li>
                <li><span className="next page-numbers"><i className="la la-long-arrow-right" /></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


  }
}

const mapStateToProps = state => ({
  viajes: state.viajes
});

export default connect(
  mapStateToProps,
  { getViajes }
)(TourList);