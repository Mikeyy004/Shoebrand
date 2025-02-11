import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageSection = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  border: 2px solid ${({ theme, $isActive }) => 
    $isActive ? theme.colors.primary : 'transparent'};

  &:hover {
    transform: translateY(-2px);
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
`;

const SizeContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const SizeButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme, $isSelected }) => 
    $isSelected ? theme.colors.primary : theme.colors.text.light};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme, $isSelected }) => 
    $isSelected ? theme.colors.white : theme.colors.text.primary};
  background-color: ${({ theme, $isSelected }) => 
    $isSelected ? theme.colors.primary : 'transparent'};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme, $isSelected }) => 
      $isSelected ? theme.colors.primaryDark : theme.colors.hover.light};
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  transition: ${({ theme }) => theme.transitions.default};
  margin-top: ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const images = [
    '/images/01.png',
    '/images/02.png',
    '/images/03.png',
    '/images/04.png'
  ];

  const sizes = ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'];

  return (
    <Section>
      <Container>
        <ProductGrid>
          <ImageSection>
            <MainImage src={images[selectedImage]} alt="Product" />
            <ThumbnailContainer>
              {images.map((image, index) => (
                <Thumbnail
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  $isActive={selectedImage === index}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </ThumbnailContainer>
          </ImageSection>
          
          <Details>
            <Title>Nike Air Max 2023</Title>
            <Price>$199.99</Price>
            <Description>
              Experience unparalleled comfort and style with our latest Nike Air Max.
              Featuring innovative cushioning technology and premium materials for
              the perfect blend of performance and fashion.
            </Description>
            
            <div>
              <h3>Select Size</h3>
              <SizeContainer>
                {sizes.map((size) => (
                  <SizeButton
                    key={size}
                    $isSelected={selectedSize === size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </SizeButton>
                ))}
              </SizeContainer>
            </div>
            
            <AddToCartButton>Add to Cart</AddToCartButton>
          </Details>
        </ProductGrid>
      </Container>
    </Section>
  );
}

export default ProductDetails; 