import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class Error extends Component {

  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
      <div className="error-page-area text-center" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/6.png)' }}>
        <div className="container">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={publicUrl + "assets/img/logo.png"} alt="logo" />
            </Link>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 error-page-wrap">
              <div className="error-page-info">
                <h1>404</h1>
                <div className="error-page-info-details">
                  <h2>Página no encontrada</h2>
                  <p>Lo sentimos, la página que ha solicitado no se ha podido encontrar. Por favor, vuelva a la página principal o póngase en contacto con nosotros en viajeserasmus.valladolid@gmail.com</p>
                  <Link className="btn btn-yellow" to="/">Volver a la página de inicio</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Error