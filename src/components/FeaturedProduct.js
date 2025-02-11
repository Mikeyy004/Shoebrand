import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(to right, #f9fafb, white);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 450px;
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 320px;
  }
`;

const CircleBackground = styled.div`
  position: absolute;
  width: 80%;
  aspect-ratio: 1;
  background: #2563eb;
  border-radius: 50%;
  opacity: 0.1;
  bottom: 0;
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0.5rem;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ContentSection = styled.div`
  flex: 1;
  min-width: 280px;
`;

const Tag = styled.h3`
  font-size: clamp(0.75rem, 1vw, 0.875rem);
  font-weight: 600;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: #111827;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Description = styled.p`
  color: #4b5563;
  line-height: 1.75;
  margin-bottom: 1.5rem;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
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
  font-size: clamp(0.875rem, 1.5vw, 1rem);

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

function FeaturedProduct() {
  return (
    <Section>
      <Container>
        <FlexContainer>
          <ImageWrapper>
            <CircleBackground />
            <Image 
              src="/images/15.png" 
              alt="Featured Product"
            />
          </ImageWrapper>
          <ContentSection>
            <Tag>Featured Product</Tag>
            <Title>Experience Ultimate Comfort</Title>
            <Description>
              Our signature shoe combines innovative cushioning technology with 
              sleek design. Perfect for both athletic performance and casual wear.
            </Description>
            <Divider />
            <Description>
              Featuring our proprietary comfort-fit system and sustainable materials, 
              this shoe represents the perfect blend of style, comfort, and 
              environmental consciousness.
            </Description>
            <ReadMore href="#details">
              Learn More 
              <span>→</span>
            </ReadMore>
          </ContentSection>
        </FlexContainer>
      </Container>
    </Section>
  );
}

export default FeaturedProduct; 