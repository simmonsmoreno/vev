import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Offer from './section-components/offer';
import Video from './section-components/video';
import HolidayPlan from './section-components/holiday-plan';
import Review from './section-components/review';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Offer />
        <Video />
        <HolidayPlan />
        <Review />
        <Subscribe />
        <Footer />
    </div>
}

export default Home_V1

