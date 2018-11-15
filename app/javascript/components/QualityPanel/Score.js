import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Container = styled.section`
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 48px;
`

export const Title = styled.small`
  display: block;
  font-size: 12px;
`

const Score = ({ quality }) => (
  <Container>
    <Title>your score:</Title>
    {quality.score}
  </Container>
)

Score.propTypes = {
  quality: PropTypes.shape({
    score: PropTypes.number.isRequired,
  }).isRequired,
}

export default Score
