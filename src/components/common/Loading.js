import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ $fullScreen }) => ($fullScreen ? '100vh' : '200px')};
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.colors.background};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loading = ({ fullScreen }) => {
  return (
    <LoadingWrapper $fullScreen={fullScreen}>
      <Spinner />
    </LoadingWrapper>
  );
};

export default Loading; 