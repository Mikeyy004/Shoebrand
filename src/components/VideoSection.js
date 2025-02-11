import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
  background: #f9fafb;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  &::before {
    content: '';
    display: block;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
  }
`;

const VideoThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${VideoContainer}:hover & {
    transform: scale(1.05);
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: white;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  svg {
    width: 30px;
    height: 30px;
    fill: #2563eb;
    margin-left: 5px; /* Offset to center the triangle */
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #111827;
  text-align: center;
  margin-bottom: 2rem;
`;

const VideoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const VideoFrame = styled.iframe`
  width: 90%;
  max-width: 1000px;
  height: 56.25vw;
  max-height: 562.5px;
  border: none;
  border-radius: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #111827;
  }
`;

const ThumbnailGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const ThumbnailPreview = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  transition: all 0.3s ease;
  padding: ${({ theme }) => theme.spacing.xs};
  background: white;
  box-shadow: ${({ $active, theme }) => 
    $active ? theme.shadows.md : theme.shadows.sm};

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/images/01.png',
    '/images/02.png',
    '/images/03.png',
    '/images/04.png'
  ];

  // Auto rotate thumbnail images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Section>
      <Container>
        <Title>Experience Velox Innovation</Title>
        <VideoContainer onClick={() => setIsVideoOpen(true)}>
          <VideoThumbnail 
            src={images[currentImageIndex]}
            alt={`Velox Footwear Design ${currentImageIndex + 1}`}
          />
          <PlayButton>
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </PlayButton>
        </VideoContainer>

        <VideoOverlay $isOpen={isVideoOpen}>
          <VideoFrame
            src={isVideoOpen ? "/images/vid.mp4" : ""}
            title="Velox Footwear Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <CloseButton onClick={() => setIsVideoOpen(false)}>
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </CloseButton>
        </VideoOverlay>

        <ThumbnailGrid>
          {images.map((image, index) => (
            <ThumbnailPreview
              key={index}
              src={image}
              alt={`Preview ${index + 1}`}
              $active={currentImageIndex === index}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </ThumbnailGrid>
      </Container>
    </Section>
  );
}

export default VideoSection; 