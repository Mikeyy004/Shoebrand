import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(1deg); }
  75% { transform: translateY(10px) rotate(-1deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, 
    ${({ theme }) => `${theme.colors.background} 0%,
    ${theme.colors.primary}05 50%,
    ${theme.colors.background} 100%`}
  );
  position: relative;
  overflow: hidden;
  padding: 0;
  display: flex;
  align-items: center;
`;

const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary}0a;
  filter: blur(100px);
  z-index: 0;

  &:nth-child(1) {
    width: 600px;
    height: 600px;
    top: -200px;
    right: -200px;
  }

  &:nth-child(2) {
    width: 400px;
    height: 400px;
    bottom: -100px;
    left: -100px;
    background: ${({ theme }) => theme.colors.primaryDark}0a;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
  height: calc(100vh - 80px);
  padding-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 80px ${({ theme }) => theme.spacing.lg} 0;
    height: 100%;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ContentColumn = styled.div`
  flex: 1;
  max-width: 600px;
  animation: ${fadeIn} 0.6s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
    margin-top: 0;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.6s ease-out 0.3s backwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-color: ${({ theme }) => theme.colors.primary}20;
    z-index: -1;
    transform: skewX(-15deg);
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
`;

const CTAButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: 0 10px 20px ${({ theme }) => theme.colors.primary}20;
  }
`;

const HeroImage = styled.img`
  max-width: 500px;
  width: 100%;
  height: 400px;
  object-fit: contain;
  animation: ${float} 6s ease-in-out infinite;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1));

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 400px;
    height: 320px;
  }
`;

const ImageIndicators = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const Indicator = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.text.light};
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  padding: 0;

  &:hover {
    transform: scale(1.2);
    background-color: ${({ $active, theme }) => 
      $active ? theme.colors.primary : theme.colors.text.secondary};
  }
`;

const Stats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const SupportText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

function CountUpAnimation({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (percentage < 1) {
        countRef.current = requestAnimationFrame(animate);
      }
    };

    countRef.current = requestAnimationFrame(animate);

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
}

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const images = [
    '/images/01.png',
    '/images/02.png',
    '/images/03.png',
    '/images/04.png',
  ];

  useEffect(() => {
    setStartCounting(true);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <HeroSection>
      <BackgroundShape />
      <BackgroundShape />
      <Container>
        <ContentColumn>
          <Title>
            Elevate Your Journey with <Highlight>Velox</Highlight> Footwear
          </Title>
          <Subtitle>
            Where speed meets style. Experience the perfect fusion of cutting-edge design 
            and unparalleled comfort with our premium athletic and lifestyle collection.
          </Subtitle>
          <CTAButton>Discover Velox</CTAButton>
          
          <Stats>
            <Stat>
              <StatNumber>
                {startCounting && <CountUpAnimation end={50} suffix="k+" />}
              </StatNumber>
              <StatLabel>Satisfied Customers</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>
                {startCounting && <CountUpAnimation end={500} suffix="+" />}
              </StatNumber>
              <StatLabel>Unique Designs</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>
                <SupportText>
                  {startCounting && <CountUpAnimation end={24} duration={1500} />}
                  /
                  {startCounting && <CountUpAnimation end={7} duration={1000} />}
                </SupportText>
              </StatNumber>
              <StatLabel>Global Support</StatLabel>
            </Stat>
          </Stats>
        </ContentColumn>

        <ImageColumn>
          <HeroImage 
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Velox Footwear - Featured Design ${currentImageIndex + 1}`}
          />
          <ImageIndicators>
            {images.map((_, index) => (
              <Indicator
                key={index}
                $active={currentImageIndex === index}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`View Velox design ${index + 1}`}
              />
            ))}
          </ImageIndicators>
        </ImageColumn>
      </Container>
    </HeroSection>
  );
}

export default Hero; 