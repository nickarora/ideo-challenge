import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export const Bar = styled.div`
  height: 100%;
`

const Progress = ({ progress, color }) => (
  <Bar
    style={{
      background: color,
      width: `${Math.abs(progress)}%`,
    }}
  />
)

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default Progress
