import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CollaborationIcon from 'assets/images/qualityIcons/collaboration.png'
import EmpowermentIcon from 'assets/images/qualityIcons/empowerment.png'
import PurposeIcon from 'assets/images/qualityIcons/purpose.png'

const icons = {
  collaboration: CollaborationIcon,
  empowerment: EmpowermentIcon,
  purpose: PurposeIcon,
}

const Container = styled.section`
  height: 125px;
  width: 125px;
  margin: 0 auto;
  text-align: center;
  background-size: 100%;
`

const Icon = ({ quality }) => (
  <Container
    style={{
      backgroundImage: `url(${icons[quality.name.toLowerCase()]})`,
    }}
  />
)

Icon.propTypes = {
  quality: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Icon
