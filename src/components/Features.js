import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  background: linear-gradient(to bottom, white, #eff6ff);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
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

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 36rem;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #eff6ff;
  border-radius: 0.5rem;
  color: #2563eb;
  transition: all 0.3s;

  ${Card}:hover & {
    background-color: #2563eb;
    color: white;
  }
`;

const Icon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 1rem 0 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
`;

function Features() {
  const features = [
    {
      id: 1,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Quality Guarantee",
      description: "All our shoes are crafted with premium materials ensuring lasting comfort and durability."
    },
    {
      id: 2,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      title: "Fast Delivery",
      description: "Free shipping on all orders with delivery within 2-4 business days."
    },
    {
      id: 3,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
      ),
      title: "Easy Returns",
      description: "30-day return policy with hassle-free exchanges and refunds."
    },
    {
      id: 4,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
      title: "Secure Shopping",
      description: "100% secure payment processing with encrypted transactions."
    }
  ];

  return (
    <Section>
      <Container>
        <Header>
          <Title>Why Choose Us</Title>
          <Underline />
          <Subtitle>Experience premium quality and exceptional service</Subtitle>
        </Header>

        <Grid>
          {features.map((feature) => (
            <Card key={feature.id}>
              <IconWrapper>
                <Icon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </Icon>
              </IconWrapper>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default Features; 