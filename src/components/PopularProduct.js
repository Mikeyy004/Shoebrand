import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: clamp(2rem, 4vw, 4rem) 0;
  background: #f9fafb;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 2vw, 2rem);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 3vw, 1.875rem);
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.75rem;
`;

const Underline = styled.div`
  width: 4rem;
  height: 0.25rem;
  background-color: #2563eb;
  margin: 0 auto 1rem;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 clamp(1rem, 3vw, 2rem);
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(-${props => props.currentIndex * 100}%);
`;

const Card = styled.div`
  flex: 0 0 100%;
  padding: 1rem;

  @media (min-width: 640px) {
    flex: 0 0 50%;
  }

  @media (min-width: 1024px) {
    flex: 0 0 33.333%;
  }
`;

const CardContent = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: clamp(1rem, 2vw, 1.5rem);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-size: clamp(1.1rem, 1.75vw, 1.25rem);
  font-weight: bold;
  color: #2563eb;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: clamp(0.5rem, 1.5vw, 0.75rem);
  background-color: #2563eb;
  color: white;
  border-radius: 9999px;
  font-weight: 500;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'prev' ? 'left: 0;' : 'right: 0;'}
  width: clamp(2rem, 4vw, 2.5rem);
  height: clamp(2rem, 4vw, 2.5rem);
  background: white;
  border-radius: 50%;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: #2563eb;
    color: white;
  }

  &:disabled {
    background-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

function PopularProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "Nike Air Jordan 1 High Obsidian Air",
      price: "$199.99",
      image: '/images/01.png'
    },
    {
      id: 2,
      name: "Cactus jack retro blue",
      price: "$179.99",
      image: '/images/02.png'
    },
    {
      id: 3,
      name: "Cactus Jack",
      price: "$149.99",
      image: '/images/03.png'
    },
    {
      id: 4,
      name: "Nike Air Force 1",
      price: "$129.99",
      image: '/images/04.png'
    },
    {
      id: 5,
      name: "Travis Brown 574",
      price: "$159.99",
      image: '/images/f1.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex(current => 
      current >= Math.ceil(products.length / getItemsPerView()) - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(current => 
      current <= 0 ? Math.ceil(products.length / getItemsPerView()) - 1 : current - 1
    );
  };

  const getItemsPerView = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  return (
    <Section>
      <Container>
        <Header>
          <Title>Our Popular Products</Title>
          <Underline />
        </Header>

        <CarouselContainer>
          <CarouselTrack currentIndex={currentIndex}>
            {products.map((product) => (
              <Card key={product.id}>
                <CardContent>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductName>{product.name}</ProductName>
                  <Price>{product.price}</Price>
                  <Button>Buy Now</Button>
                </CardContent>
              </Card>
            ))}
          </CarouselTrack>

          <NavButton 
            direction="prev" 
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </NavButton>
          <NavButton 
            direction="next" 
            onClick={nextSlide}
            disabled={currentIndex >= Math.ceil(products.length / getItemsPerView()) - 1}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </NavButton>
        </CarouselContainer>
      </Container>
    </Section>
  );
}

export default PopularProduct;