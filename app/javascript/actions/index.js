export const setCreativeQualitySortOrder = sortOrder => ({
  type: 'SET_CREATIVE_QUALITY_SORT_ORDER',
  payload: sortOrder,
})

export const SortOrder = {
  NAME: 'NAME',
  SCORE: 'SCORE',
}
