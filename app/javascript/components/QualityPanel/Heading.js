import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.header`
  color: white;
  border-radius: 0;
  font-size: 24px;
  padding: 10px 15px;
`

const Heading = ({ quality }) => (
  <Container
    style={{
      background: quality.color,
    }}
  >
    {quality.name}
  </Container>
)

Heading.propTypes = {
  quality: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
}

export default Heading
