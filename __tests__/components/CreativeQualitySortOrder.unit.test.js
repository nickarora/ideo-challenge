const sortByName = jest.fn()
const sortByScore = jest.fn()

const mockSortConfig = sortConfig => {
  jest.doMock('react-redux', () => {
    return {
      connect: () => Component => () => (
        <Component
          sortConfig={sortConfig}
          sortByName={sortByName}
          sortByScore={sortByScore}
        />
      ),
    }
  })

  return require('~/components/CreativeQualitySortOrder').default // eslint-disable-line
}

beforeEach(() => {
  jest.resetModules()
})

describe('CreativeQualitySortOrder', () => {
  describe('when SortOrder is by score', () => {
    it('renders as ascending', () => {
      const CreativeQualitySortOrder = mockSortConfig({
        sortOrder: 'SCORE',
        scoreAscending: true,
        nameAscending: false,
      })

      const wrapper = shallow(<CreativeQualitySortOrder />).dive()
      expect(wrapper).toMatchSnapshot()
    })

    it('renders as descending', () => {
      const CreativeQualitySortOrder = mockSortConfig({
        sortOrder: 'SCORE',
        scoreAscending: false,
        nameAscending: false,
      })

      const wrapper = shallow(<CreativeQualitySortOrder />).dive()
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when SortOrder is by name', () => {
    it('renders as ascending', () => {
      const CreativeQualitySortOrder = mockSortConfig({
        sortOrder: 'NAME',
        scoreAscending: false,
        nameAscending: true,
      })

      const wrapper = shallow(<CreativeQualitySortOrder />).dive()
      expect(wrapper).toMatchSnapshot()
    })

    it('renders as descending', () => {
      const CreativeQualitySortOrder = mockSortConfig({
        sortOrder: 'NAME',
        scoreAscending: false,
        nameAscending: false,
      })

      const wrapper = shallow(<CreativeQualitySortOrder />).dive()
      expect(wrapper).toMatchSnapshot()
    })
  })

  it('selects score on tap', () => {
    const CreativeQualitySortOrder = mockSortConfig({
      sortOrder: 'NAME',
      scoreAscending: true,
      nameAscending: false,
    })

    const wrapper = shallow(<CreativeQualitySortOrder />).dive()
    wrapper.find('#sort-by-score').simulate('click')
    expect(sortByScore).toHaveBeenCalled()
  })

  it('renders as descending', () => {
    const CreativeQualitySortOrder = mockSortConfig({
      sortOrder: 'NAME',
      scoreAscending: false,
      nameAscending: false,
    })

    const wrapper = shallow(<CreativeQualitySortOrder />).dive()
    wrapper.find('#sort-by-name').simulate('click')
    expect(sortByName).toHaveBeenCalled()
  })
})
