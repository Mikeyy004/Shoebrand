import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  overflow: hidden;
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
  font-size: 2rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #6b7280;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  animation: ${slideAnimation} 30s linear infinite;
  animation-play-state: ${props => props.isPaused ? 'paused' : 'running'};

  &:hover {
    animation-play-state: paused;
  }
`;

const ReviewCard = styled.div`
  flex: 0 0 350px;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const UserDetails = styled.div`
  flex: 1;
`;

const UserName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const UserTitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const Star = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${props => props.filled ? '#FCD34D' : '#E5E7EB'};
`;

const ReviewText = styled.p`
  color: #4b5563;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const VerifiedBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: #059669;
  font-size: 0.875rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

function CustomerReviews() {
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Professional Runner",
      avatar: '/images/human.jpg',
      rating: 5,
      text: "These shoes have completely transformed my running experience. The comfort and support are unmatched, and I've seen significant improvements in my performance.",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Fitness Enthusiast",
      avatar: '/images/human.jpg',
      rating: 5,
      text: "I've tried many running shoes, but these are by far the best. The cushioning is perfect, and they look amazing. Definitely worth the investment!",
      verified: true
    },
    {
      id: 3,
      name: "Emma Wilson",
      title: "Marathon Runner",
      avatar: '/images/human.jpg',
      rating: 5,
      text: "Incredible comfort and durability. I've run multiple marathons in these shoes, and they still feel as good as new. Highly recommended!",
      verified: true
    },
    // Duplicate reviews for continuous scrolling
    {
      id: 4,
      name: "Sarah Johnson",
      title: "Professional Runner",
      avatar: '/images/human.jpg',
      rating: 5,
      text: "These shoes have completely transformed my running experience. The comfort and support are unmatched, and I've seen significant improvements in my performance.",
      verified: true
    },
    {
      id: 5,
      name: "Michael Chen",
      title: "Fitness Enthusiast",
      avatar: '/images/human.jpg',
      rating: 5,
      text: "I've tried many running shoes, but these are by far the best. The cushioning is perfect, and they look amazing. Definitely worth the investment!",
      verified: true
    },
    {
      id: 6,
      name: "Emma Wilson",
      title: "Marathon Runner",
      avatar: '/images/human.jpg',
      rating: 5,
      text: "Incredible comfort and durability. I've run multiple marathons in these shoes, and they still feel as good as new. Highly recommended!",
      verified: true
    }
  ];

  return (
    <Section>
      <Container>
        <Header>
          <Title>What Our Customers Say</Title>
          <Subtitle>Read genuine reviews from our satisfied customers worldwide</Subtitle>
        </Header>

        <CarouselContainer>
          <CarouselTrack isPaused={isPaused}>
            {reviews.map((review) => (
              <ReviewCard 
                key={review.id}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <UserInfo>
                  <Avatar src={review.avatar} alt={review.name} />
                  <UserDetails>
                    <UserName>{review.name}</UserName>
                    <UserTitle>{review.title}</UserTitle>
                  </UserDetails>
                </UserInfo>
                <Stars>
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index}
                      filled={index < review.rating}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </Star>
                  ))}
                </Stars>
                <ReviewText>{review.text}</ReviewText>
                {review.verified && (
                  <VerifiedBadge>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verified Purchase
                  </VerifiedBadge>
                )}
              </ReviewCard>
            ))}
          </CarouselTrack>
        </CarouselContainer>
      </Container>
    </Section>
  );
}

export default CustomerReviews;