import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularProduct from './components/PopularProduct';
import FeaturedProduct from './components/FeaturedProduct';
import VideoSection from './components/VideoSection';
import LatestSection from './components/LatestSection';
import CustomerReviews from './components/CustomerReviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Loading from './components/common/Loading';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Loading fullScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <Hero />
        <PopularProduct />
        <FeaturedProduct />
        <VideoSection />
        <LatestSection />
        <CustomerReviews />
        <Newsletter />
        <ProductDetails />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;