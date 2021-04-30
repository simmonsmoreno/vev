import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class Gallery extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    // let imagealt = 'image'

    return <div className="main-gallery-area pd-top-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="single-gallery-area bg-gray px-3">
              <div className="gallery-title">
                <p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="img" />Castilla y Leon</p>
                <h4><Link to="/gallery-details">Viaje a Segovia</Link></h4>
              </div>
              <div className="gallery-slider">
                <div className="thumb">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vista-aerea-general-de-Segovia.jpg" width={248} height={180} alt="img" />
                </div>
                <div className="thumb">
                  <img src="https://pelomundo.com.vc/wp-content/uploads/2018/02/segovia.jpg" width={248} height={180} alt="img" />
                </div>
                <div className="thumb">
                  <img src="https://www.viajantecomum.com/wp-content/uploads/2017/07/aquedutos-de-segovia-1.jpg" width={248} height={180} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-gallery-area bg-gray px-3">
              <div className="gallery-title">
                <p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="img" />Castilla y Leon</p>
                <h4><Link to="/gallery-details">Viaje a Salamanca</Link></h4>
              </div>
              <div className="gallery-slider">
                <div className="thumb">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Reflejos_de_la_Catedrales_de_Salamanca.jpg" width={248} height={180} alt="img" />
                </div>
                <div className="thumb">
                  <img src="https://www.iberian-escapes.com/images/salamanca-spain.jpg" width={248} height={180} alt="img" />
                </div>
                <div className="thumb">
                  <img src="https://pelomundo.com.vc/wp-content/uploads/2018/02/salamanca.jpg" width={248} height={180} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-gallery-area bg-gray px-3">
              <div className="gallery-title">
                <p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="img" />Castilla y Leon</p>
                <h4><Link to="/gallery-details">Viaje a Leon</Link></h4>
              </div>
              <div className="gallery-slider">
                <div className="thumb">
                  <img src="https://lh3.googleusercontent.com/proxy/8crT7Yn6Pj6sZK30jnw9MRiCQcTX5sgvoCGD68nHRbFv-bT8aYDWD0ZsKwJ7-pNJDutwOyrcR9jgN8BrY2nEkg6lKc6D0-Rlq6j73PFCjbWxaoJEPQmPc11-S5Y" width={248} height={180} alt="img" />
                </div>
                <div className="thumb">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Catedral_G%C3%B3tica_de_Le%C3%B3n.jpg" width={248} height={180} alt="img" />
                </div>
                <div className="thumb">
                  <img src="https://i.pinimg.com/originals/05/b8/fd/05b8fdbb88cf37011435dc09d6ad2b19.jpg" width={248} height={180} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-gallery-area bg-gray px-3">
              <div className="gallery-title">
                <p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="img" />Castilla y Leon</p>
                <h4><Link to="/gallery-details">Viaje a Burgos</Link></h4>
              </div>
              <div className="gallery-slider">
                <div className="thumb">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Catedral_de_Burgos_II.jpg" width={248} height={180} alt="img" />
                </div>
                <div className="thumb">
                  <img src="https://www.camping-car.travel/wp-content/uploads/2019/02/IMG_20190211_131034.jpg" width={248} height={180} alt="img" />
                </div>
                <div className="thumb">
                  <img src="https://static.vecteezy.com/ti/photos-gratuite/p2/1245950-eglise-st-cosme-et-st-damian-en-covarrubias-burgos-espagne-photo.jpg" width={248} height={180} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Gallery