import React from 'react';
import Hero from '../components/Hero';
import FeaturedTrio from '../components/FeaturedTrio';
import LogoStrip from '../components/LogoStrip';
import TopProducts from '../components/TopProducts';
import FavoritePicks from '../components/FavoritePicks';
import EducationSection from '../components/EducationSection';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedTrio />
      <LogoStrip />
      <div className="my-32"></div>
      <TopProducts />
      <FavoritePicks />
      <EducationSection />
      <Benefits />
      <Testimonials />
    </>
  );
};

export default Home;