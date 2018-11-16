import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setCreativeQualitySortOrder, SortOrder } from '../actions'

export const Container = styled.section`
  position: fixed;
  top: 8px;
  right: 8px;
`

export const Button = styled.button`
  margin-right: 8px;
`

const buttonStyle = isActive => `btn btn-primary ${isActive && 'btn-info'}`
const ascendingIcon = ascending => (ascending ? '↑' : '↓')

const CreativeQualitySortOrder = ({ sortConfig, sortByName, sortByScore }) => (
  <Container>
    <Button
      id="sort-by-score"
      onClick={sortByScore}
      className={buttonStyle(sortConfig.sortOrder === SortOrder.SCORE)}
    >
      Sort by score {ascendingIcon(sortConfig.scoreAscending)}
    </Button>
    <Button
      id="sort-by-name"
      onClick={sortByName}
      className={buttonStyle(sortConfig.sortOrder === SortOrder.NAME)}
    >
      Sort by name {ascendingIcon(sortConfig.nameAscending)}
    </Button>
  </Container>
)

CreativeQualitySortOrder.propTypes = {
  sortConfig: PropTypes.shape({
    sortOrder: PropTypes.string.isRequired,
    scoreAscending: PropTypes.bool.isRequired,
    nameAscending: PropTypes.bool.isRequired,
  }).isRequired,
  sortByName: PropTypes.func.isRequired,
  sortByScore: PropTypes.func.isRequired,
}

const mapStateToProps = (state, _ownProps) => ({
  sortConfig: state.creativeQualitySortOrder,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  sortByName: () => dispatch(setCreativeQualitySortOrder(SortOrder.NAME)),
  sortByScore: () => dispatch(setCreativeQualitySortOrder(SortOrder.SCORE)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreativeQualitySortOrder)
