import creativeQualitySortOrder from '~/reducers/creativeQualitySortOrder'
import { SortOrder } from '~/actions'

describe('creativeQualitySortOrder', () => {
  describe('when score selected as sort order', () => {
    const defaultState = {
      sortOrder: SortOrder.SCORE,
      scoreAscending: true,
      nameAscending: true,
    }

    it('updates sort order to name', () => {
      const result = creativeQualitySortOrder(defaultState, {
        type: 'SET_CREATIVE_QUALITY_SORT_ORDER',
        payload: SortOrder.NAME,
      })

      expect(result.sortOrder).toEqual(SortOrder.NAME)
    })

    it('updates ascension if reselecting score', () => {
      const result = creativeQualitySortOrder(defaultState, {
        type: 'SET_CREATIVE_QUALITY_SORT_ORDER',
        payload: SortOrder.SCORE,
      })

      expect(result.scoreAscending).toEqual(false)
    })
  })

  describe('when name selected as sort order', () => {
    const defaultState = {
      sortOrder: SortOrder.NAME,
      scoreAscending: true,
      nameAscending: true,
    }

    it('updates sort order to score', () => {
      const result = creativeQualitySortOrder(defaultState, {
        type: 'SET_CREATIVE_QUALITY_SORT_ORDER',
        payload: SortOrder.SCORE,
      })

      expect(result.sortOrder).toEqual(SortOrder.SCORE)
    })

    it('updates ascension if reselecting name', () => {
      const result = creativeQualitySortOrder(defaultState, {
        type: 'SET_CREATIVE_QUALITY_SORT_ORDER',
        payload: SortOrder.NAME,
      })

      expect(result.nameAscending).toEqual(false)
    })
  })
})
