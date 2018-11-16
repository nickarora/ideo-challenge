import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from './Card'
import Heading from './Heading'
import Icon from './Icon'
import Score from './Score'
import Description from './Description'
import ProgressBar from './ProgressBar'

export const Content = styled.section`
  padding: 15px;
`

const QualityPanel = ({ quality }) => (
  <Card quality={quality}>
    <Heading quality={quality} />
    <Content>
      <Icon quality={quality} />
      <Score quality={quality} />
      <ProgressBar quality={quality} />
      <Description quality={quality} />
    </Content>
  </Card>
)

QualityPanel.propTypes = {
  quality: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
}

export default QualityPanel
