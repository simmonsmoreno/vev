import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class GalleryDetails extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    // let imagealt = 'image'

    return (
      <div className="gallery-area pd-top-108">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2 className="title">Viaje a Segovia</h2>
                <p>Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu posuere viverra. Vestibulum id turpis lectus. Donec rhoncus quis elit</p>
              </div>
            </div>
          </div>
          {/* Gallery area start */}
          <div className="gallery-area">
            <div className="container">
              <div className="gallery-filter-area row">
                <div className="gallery-sizer col-1" />
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-4 col-12 mb-10">
                  <div className="tp-gallery-item-img">
                    <a className="popup-thumb" href={publicUrl + "assets/img/destination-list/segovia-1.jpg"} data-effect="mfp-zoom-in">
                      <img width={300} height={200} src={publicUrl + "assets/img/destination-list/segovia-1.jpg"} alt="imagem" />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-4 col-12 mb-10">
                  <div className="tp-gallery-item-img">
                    <a className="popup-thumb" href="https://upload.wikimedia.org/wikipedia/commons/9/95/Vista-aerea-general-de-Segovia.jpg" data-effect="mfp-zoom-in">
                      <img width={300} height={200} src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vista-aerea-general-de-Segovia.jpg" alt="imagem" />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-4 col-12 mb-10">
                  <div className="tp-gallery-item-img">
                    <a className="popup-thumb" href="https://pelomundo.com.vc/wp-content/uploads/2018/02/segovia.jpg" data-effect="mfp-zoom-in">
                      <img width={300} height={200} src="https://pelomundo.com.vc/wp-content/uploads/2018/02/segovia.jpg" alt="imagem" />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-4 col-12 mb-10">
                  <div className="tp-gallery-item-img">
                    <a className="popup-thumb" href="https://www.viajantecomum.com/wp-content/uploads/2017/07/aquedutos-de-segovia-1.jpg" data-effect="mfp-zoom-in">
                      <img width={300} height={200} src="https://www.viajantecomum.com/wp-content/uploads/2017/07/aquedutos-de-segovia-1.jpg" alt="imagem" />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-4 col-12 mb-10">
                  <div className="tp-gallery-item-img">
                    <a className="popup-thumb" href="https://roteirosemais.com/wp-content/uploads/2015/11/catedral-segovia.jpg" data-effect="mfp-zoom-in">
                      <img width={300} height={200} src="https://roteirosemais.com/wp-content/uploads/2015/11/catedral-segovia.jpg" alt="imagem" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* Gallery area end */}
        </div>
      </div>
    )
  }
}

export default GalleryDetails