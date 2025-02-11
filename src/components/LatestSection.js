import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { productImages } from '../constants/images';

const Section = styled.section`
  padding: 4rem 0;
  background: linear-gradient(to left, #f9fafb, white);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  order: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    order: 1;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const ImageIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Indicator = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: ${({ $active }) => 
    $active ? '#2563eb' : 'rgba(37, 99, 235, 0.2)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ $active }) => 
      $active ? '#2563eb' : 'rgba(37, 99, 235, 0.4)'};
  }
`;

const ContentSection = styled.div`
  flex: 1;
  order: 1;
  @media (max-width: 768px) {
    order: 2;
  }
`;

const Tag = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.75;
  margin-bottom: 1.5rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #e5e7eb;
  margin: 1.5rem 0;
  width: 100%;
`;

const ReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #1d4ed8;
  }

  span {
    margin-left: 0.5rem;
    transition: transform 0.3s;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;

function LatestSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Container>
        <FlexContainer>
          <ContentSection>
            <Tag>Latest Release</Tag>
            <Title>Introducing Our Most Advanced Running Shoe</Title>
            <Description>
              Elevate your running experience with our latest innovation in athletic footwear. 
              Featuring revolutionary cushioning technology and adaptive support system that 
              responds to your unique running style.
            </Description>
            <Divider />
            <Description>
              The breathable knit upper provides superior ventilation while maintaining 
              structural integrity. Our eco-friendly materials and sustainable manufacturing 
              process make this shoe not just great for your run, but better for the planet.
            </Description>
            <ReadMore href="#details">
              Discover More 
              <span>→</span>
            </ReadMore>
          </ContentSection>

          <ImageSection>
            <Image 
              src={productImages[currentImageIndex]}
              alt={`Latest Velox Release - View ${currentImageIndex + 1}`}
            />
            <ImageIndicators>
              {productImages.map((_, index) => (
                <Indicator
                  key={index}
                  $active={currentImageIndex === index}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </ImageIndicators>
          </ImageSection>
        </FlexContainer>
      </Container>
    </Section>
  );
}

export default LatestSection; 