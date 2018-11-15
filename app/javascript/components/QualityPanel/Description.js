import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Container = styled.p`
  text-align: left;
  margin-bottom: 3px;
`

const Description = ({ quality }) => (
  <Container>{quality.description}</Container>
)

Description.propTypes = {
  quality: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default Description
