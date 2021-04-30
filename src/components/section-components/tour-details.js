import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class TourDetails extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    // let imagealt = 'image'

    return (
      <div className="tour-details-area mg-top--70">
        <div className="tour-details-gallery">
          <div className="container-bg bg-dark-blue">
            <div className="container">
              <div className="gallery-filter-area row">
                <div className="gallery-sizer col-1" />
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                  <div className="tp-gallery-item-img">
                    <div className="thumbnails">
                      <img src={publicUrl + "assets/img/tour-details/madrid.jpg"} alt="imagem" />
                      <div className="video-popup-btn">
                        <a href="https://www.youtube.com/watch?v=NeAC-MfTZzU" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-3 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <Link data-effect="mfp-zoom-in">
                      <img width={300} height={150} src={publicUrl + "assets/img/tour-details/madrid-2.jpg"} alt="imagem" />
                    </Link>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <Link data-effect="mfp-zoom-in">
                      <img width={300} height={150} src={publicUrl + "assets/img/tour-details/madrid-3.jpg"} alt="imagem" />
                    </Link>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <Link data-effect="mfp-zoom-in">
                      <img width={300} height={150} src={publicUrl + "assets/img/tour-details/madrid-4.jpg"} alt="imagem" />
                    </Link>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <Link data-effect="mfp-zoom-in">
                      <img width={300} height={150} src={publicUrl + "assets/img/tour-details/madrid-2.jpg"} alt="imagem" />
                    </Link>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <Link data-effect="mfp-zoom-in">
                      <img width={300} height={150} src={publicUrl + "assets/img/tour-details/madrid.jpg"} alt="imagem" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4">
                  <div className="details">
                    <p className="location mb-0"><i className="fa fa-map-marker" />Espanha</p>
                    <h4 className="title">Madrid</h4>
                    {/* <p className="content">3 days 2 person</p> */}
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="ic-yellow fa fa-star" />
                      <i className="fa fa-star" />
                      <span>4.0</span>
                    </div>
                    <div className="all-tags">
                      <a href="/#">Adventures</a>
                      <a href="/#">Local special ties</a>
                      <a href="/#">Natural</a>
                      <a href="/#">Travel</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8">
                  <div className="book-list-warp">
                    <p className="book-list-content">Ya está reservado. Consigue tu plaza antes de que sea demasiado tarde.</p>
                    <div className="tp-price-meta">
                      <p>Precio</p>
                      <h2>21 <small>&euro;</small></h2>
                    </div>
                  </div>
                  <ul className="tp-list-meta border-tp-solid">
                    <li className="ml-0"><i className="fa fa-calendar-o" />14 de Mayo de 2021</li>
                    {/* <li><i className="fa fa-clock-o" /> 9pm</li> */}
                    <li><i className="fa fa-clock-o" /> 09:00 Poniente</li>
                    <li><i className="fa fa-clock-o" /> 21:30 Puente del Sol</li>
                    {/* <li><i className="fa fa-star" /> 4.3</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">

          {/* destinations-details-main-slider start */}
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10">
              <div className="destinations-details-main-slider-wrap">
                <div className="destinations-details-main-slider">
                  <div className="d-details-main-slider-item">
                    <img src={publicUrl + "assets/img/tour-details/madrid-2.jpg"} alt="img" />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img src={publicUrl + "assets/img/tour-details/madrid-3.jpg"} alt="img" />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img src={publicUrl + "assets/img/tour-details/madrid-4.jpg"} alt="img" />
                  </div>
                </div>
                <div className="destinations-details-main-slider-controls">
                  <div className="slider-nav tp-control-nav" />
                  {/*slider-nav*/}
                  <div className="slider-extra tp-slider-extra">
                    <div className="text">
                      <span className="first">01 </span>
                      <span className="last">05</span>
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
          {/* destinations-details-main-slider End */}

          <div className="row">
            <div className="col-lg-8">
              <div className="tour-details-wrap">
                <h4 className="single-page-small-title">Descripción</h4>
                <p>Durante la década de 1980 y tras el fin de la dictadura de Francisco Franco, Madrid vivió una época de auge contracultural y del ocio nocturno, conocido como «movida madrileña», lo que desde entonces ha posicionado a la ciudad como una de las más conocidas por su vida nocturna, bares y discotecas. A esto se lo conoce popularmente como «marcha» o «fiesta».161​ Se organiza principalmente en el distrito centro, donde se junta todo tipo de estilos y nacionalidades, dando lugar a una rica mezcla, con muchas opciones, hasta altas horas de la madrugada (1:00-7:00h). Existe marcada diferencia entre los locales enfocados al turismo nacional y el internacional. Las zonas tradicionalmente orientadas a la concentración de locales de diversión son la plaza de Santa Ana, en el llamado «Barrio de las Letras», y los barrios de Malasaña, alrededor de la plaza Dos de Mayo, La Latina, Lavapiés, y Chueca. También cabe destacar áreas como Moncloa, la avenida de Brasil o el barrio de Salamanca.161​El barrio de las Letras o Huertas, es conocido por su heterogeneidad social durante la noche madrileña, ya que se mezclan gran número de turistas internacionales con turismo de provincias y el local madrileño. El rango de edad también es muy variado.</p>
                <div className="package-included-location">
                  <h4 className="single-page-small-title">¿Qué ver?</h4>
                  <div className="row">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/puerta-del-sol.jfif"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Puerta del Sol</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/gran-via.jpg"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Gran Via</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/plaza-mayor.jfif"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Plaza Mayor</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/plaza-espanha.jpg"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Plaza de Espana</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/templo-de-debod.jfif"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Templo de Debod</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/catedral-almudena.jpg"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Catedral de la Almudena</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/palacio-real.jpg"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Palacio Real</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/parque-retiro.jpg"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Parque del Retiro</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/parque-cristal.jpg"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Palacio de Cristal</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/puerta-alcala.jpg"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Puerta de Alcala</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                          <div className="thumb">
                            <img width={400} height={200} src={publicUrl + "assets/img/tour-details/fuente-cibeles.jpg"} alt="list" />
                          </div>
                          <div className="details">
                            <h4 className="title">Fuente de Cibeles</h4>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area sidebar-area-4">
                <div className="widget tour-list-widget">
                  <div className="widget-tour-list-meta">
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
                    <div className="text-lg-center text-left">
                      <a className="btn btn-yellow" href="/pago">Reserva Ahorra <i className="fa fa-paper-plane" /></a>
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

export default TourDetails