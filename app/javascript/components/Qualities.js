import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import QualityPanel from './QualityPanel'

export const Container = styled.section`
  margin-top: 16px;
`

const Qualities = ({ qualities }) => (
  <Container>
    {qualities.map(quality => (
      <div key={quality.name} className="col-md-4">
        <QualityPanel quality={quality} />
      </div>
    ))}
  </Container>
)

Qualities.propTypes = {
  qualities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Qualities
