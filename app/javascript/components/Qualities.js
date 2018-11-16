import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import FlipMove from 'react-flip-move'
import QualityPanel from './QualityPanel'
import sortQualities from '../util/sortQualities'

export const Container = styled.section`
  margin-top: 16px;
`

const Qualities = ({ sortConfig, qualities }) => (
  <Container>
    <FlipMove appearAnimation="fade">
      {sortQualities(qualities, sortConfig).map(quality => (
        <div key={quality.name} className="col-md-4">
          <QualityPanel quality={quality} />
        </div>
      ))}
    </FlipMove>
  </Container>
)

Qualities.propTypes = {
  sortConfig: PropTypes.shape({
    sortOrder: PropTypes.string.isRequired,
    scoreAscending: PropTypes.bool.isRequired,
    nameAscending: PropTypes.bool.isRequired,
  }).isRequired,
  qualities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
}

const mapStateToProps = (state, _ownProps) => ({
  sortConfig: state.creativeQualitySortOrder,
})

export default connect(mapStateToProps)(Qualities)
