import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class TourList extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    // let imagealt = 'image'

    return <div className="tour-list-area pd-top-120 viaje-go-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Link to="/tour-details">
              <div className="single-destinations-list style-four">
                <div className="blur-thumb" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/destination-list/madrid-1.jpg)' }} />
                <div className="details">
                  <div className="tp-review-meta">
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="fa fa-star" />
                    <span>4.0</span>
                  </div>
                  <p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Madrid</p>
                  <h4 className="title">Madrid</h4>
                  <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                  <div className="list-price-meta">
                    <ul className="tp-list-meta d-inline-block">
                      <li><i className="fa fa-calendar-o" /> 14 de Mayo</li>
                    </ul>
                    <div className="tp-price-meta d-inline-block">
                      <p>Precio</p>
                      <h2>21 <span>	&euro;</span></h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link to="/tour-details">
              <div className="single-destinations-list style-four">
                <div className="blur-thumb" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/destination-list/bilbau-1.jpg)' }} />
                <div className="details">
                  <div className="tp-review-meta">
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="fa fa-star" />
                    <span>4.0</span>
                  </div>
                  <p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Bilbao</p>
                  <h4 className="title"><Link to="/tour-details">Bilbao</Link></h4>
                  <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                  <div className="list-price-meta">
                    <ul className="tp-list-meta d-inline-block">
                      <li><i className="fa fa-calendar-o" /> 16 de Mayo</li>
                    </ul>
                    <div className="tp-price-meta d-inline-block">
                      <p>Precio</p>
                      <h2>26 <span>	&euro;</span></h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link to="/tour-details">
              <div className="single-destinations-list style-four">
                <div className="blur-thumb" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/destination-list/parque-werner-2.jpg)' }} />
                <div className="details">
                  <div className="tp-review-meta">
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="fa fa-star" />
                    <span>4.0</span>
                  </div>
                  <p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Madrid</p>
                  <h4 className="title"><Link to="/tour-details">Parque Werner</Link></h4>
                  <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                  <div className="list-price-meta">
                    <ul className="tp-list-meta d-inline-block">
                      <li><i className="fa fa-calendar-o" /> 22 de Mayo</li>
                    </ul>
                    <div className="tp-price-meta d-inline-block">
                      <p>Precio</p>
                      <h2>45 <span>	&euro;</span></h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link to="/tour-details">
              <div className="single-destinations-list style-four">
                <div className="blur-thumb" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/destination-list/san-sebastian-1.jpg)' }} />
                <div className="details">
                  <div className="tp-review-meta">
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="fa fa-star" />
                    <span>4.0</span>
                  </div>
                  <p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Pays Basco</p>
                  <h4 className="title"><Link to="/tour-details">San Sebastian</Link></h4>
                  <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                  <div className="list-price-meta">
                    <ul className="tp-list-meta d-inline-block">
                      <li><i className="fa fa-calendar-o" /> 23 de Mayo</li>
                    </ul>
                    <div className="tp-price-meta d-inline-block">
                      <p>Precio</p>
                      <h2>26 <span>	&euro;</span></h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

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

export default TourList