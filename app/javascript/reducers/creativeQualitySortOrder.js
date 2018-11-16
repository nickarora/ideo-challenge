import { SortOrder } from '../actions'

const defaultState = {
  sortOrder: SortOrder.SCORE,
  scoreAscending: true,
  nameAscending: true,
}

const creativeQualitySortOrder = (state = defaultState, action) => {
  const reselected = state.sortOrder === action.payload
  const selectedScore = action.payload === SortOrder.SCORE
  const selectedName = !selectedScore

  switch (action.type) {
    case 'SET_CREATIVE_QUALITY_SORT_ORDER':
      return {
        sortOrder: action.payload,
        scoreAscending:
          reselected && selectedScore
            ? !state.scoreAscending
            : state.scoreAscending,
        nameAscending:
          reselected && selectedName
            ? !state.nameAscending
            : state.nameAscending,
      }
    default:
      return state
  }
}

export default creativeQualitySortOrder
