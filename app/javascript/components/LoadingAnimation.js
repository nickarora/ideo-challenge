import React from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.span`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 36px;
`
const LoadingAnimation = () => (
  <Container>
    <Spinner className="glyphicon glyphicon-refresh" />
  </Container>
)

export default LoadingAnimation
