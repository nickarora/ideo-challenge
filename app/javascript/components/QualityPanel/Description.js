import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { truncate } from 'lodash'

export const Container = styled.section`
  text-align: left;
  margin-bottom: 3px;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const ReadMore = styled.span`
  color: #3c99d9;
  cursor: pointer;
  font-size: 12px;
`

const MAX_CHARS = 120

class Description extends Component {
  state = {
    truncated: true,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.quality.description.length > MAX_CHARS) {
      return prevState
    }

    return {
      truncated: false,
    }
  }

  toggleTruncated = () => {
    this.setState({
      truncated: !this.state.truncated,
    })
  }

  description = () => {
    const { quality } = this.props

    if (this.state.truncated) {
      return truncate(quality.description, {
        length: MAX_CHARS,
      })
    }

    return quality.description
  }

  readMoreOrLess = () => {
    if (this.state.truncated) {
      return 'read more'
    }

    return 'read less'
  }

  truncationPossible = () => this.props.quality.description.length > MAX_CHARS

  render() {
    return (
      <Container>
        {this.description()}
        {this.props.quality.description.length > MAX_CHARS && (
          <Footer>
            <ReadMore onClick={this.toggleTruncated}>
              {this.readMoreOrLess()}
            </ReadMore>
          </Footer>
        )}
      </Container>
    )
  }
}

Description.propTypes = {
  quality: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default Description
