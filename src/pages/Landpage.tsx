import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/HomeHeader';
import Footer from '../components/Footer/Footer';

const Landpage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Landpage;
