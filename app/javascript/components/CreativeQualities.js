import React from 'react'
import { PropTypes } from 'prop-types'
import { connect, PromiseState } from 'react-refetch'
import LoadingAnimation from './LoadingAnimation'
import Error from './Error'
import Qualities from './Qualities'

const CreativeQualities = ({ creativeQualitiesFetch }) => {
  if (creativeQualitiesFetch.pending) {
    return <LoadingAnimation />
  }

  if (creativeQualitiesFetch.rejected) {
    return <Error error={creativeQualitiesFetch.reason} />
  }

  return <Qualities qualities={creativeQualitiesFetch.value} />
}

CreativeQualities.propTypes = {
  creativeQualitiesFetch: PropTypes.instanceOf(PromiseState).isRequired,
}

export default connect(props => ({
  creativeQualitiesFetch: `/creative_qualities.json`,
}))(CreativeQualities)
