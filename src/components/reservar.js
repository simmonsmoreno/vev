import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Pago from './section-components/pago';
import Footer from './global-components/footer';

const Reservar = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Reserve un viaje"  />
        <Pago />
        <Footer />
    </div>
}

export default Reservar

