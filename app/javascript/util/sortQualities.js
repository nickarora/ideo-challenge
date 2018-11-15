import { sortBy, reverse } from 'lodash'
import { SortOrder } from '../actions'

export default (qualities, sortConfig) => {
  let sorted = qualities

  if (sortConfig.sortOrder === SortOrder.SCORE) {
    sorted = sortBy(qualities, 'score')
  } else {
    sorted = sortBy(qualities, 'name')
  }

  const ascending =
    sortConfig.sortOrder === SortOrder.SCORE
      ? sortConfig.scoreAscending
      : sortConfig.nameAscending

  return ascending ? sorted : reverse(sorted)
}
