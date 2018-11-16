import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.article`
  border-radius: 5px;
  border-style: solid;
  border-width: 5px;
  box-shadow: 0px 1px 24px 0px rgba(0, 0, 0, 0.33);
  margin-bottom: 21px;
  text-align: center;
`

const Card = ({ quality, children }) => (
  <Container
    style={{
      borderColor: quality.color,
    }}
  >
    {children}
  </Container>
)

Card.propTypes = {
  quality: PropTypes.shape({
    color: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default Card
