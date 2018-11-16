import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import Progress from './Progress'

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 24px;
  margin-bottom: 24px;
`

export const NegativeProgress = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  height: 6px;
`

export const Divider = styled.div`
  width: 1px;
  border: 1px black dashed;
  height: 100%;
`

export const PositiveProgress = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  height: 6px;
`

const ProgressBar = ({ quality: { score, color } }) => (
  <Container>
    <NegativeProgress>
      {score < 0 && <Progress progress={score} color={color} />}
    </NegativeProgress>
    <Divider />
    <PositiveProgress>
      {score > 0 && <Progress progress={score} color={color} />}
    </PositiveProgress>
  </Container>
)

ProgressBar.propTypes = {
  quality: PropTypes.shape({
    color: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
}

export default ProgressBar
