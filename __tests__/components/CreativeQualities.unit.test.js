jest.mock('assets/images/qualityIcons/collaboration.png', () => 'img')
jest.mock('assets/images/qualityIcons/empowerment.png', () => 'img')
jest.mock('assets/images/qualityIcons/purpose.png', () => 'img')

const mockFetchResult = mockResponse => {
  jest.doMock('react-refetch', () => {
    class PromiseState {
      constructor(promiseStateConfig) {
        this.pending = promiseStateConfig.pending
        this.rejected = promiseStateConfig.rejected
        this.reason = promiseStateConfig.reason
        this.value = promiseStateConfig.value
      }
    }

    return {
      connect: () => Component => () => (
        <Component creativeQualitiesFetch={new PromiseState(mockResponse)} />
      ),
      PromiseState,
    }
  })

  return require('~/components/CreativeQualities').default // eslint-disable-line
}

beforeEach(() => {
  jest.resetModules()
})

describe('CreativeQualities', () => {
  it('renders a loading animation if the fetch request is still pending', () => {
    const CreativeQualities = mockFetchResult({
      pending: true,
      rejected: false,
      reason: null,
      value: null,
    })

    const wrapper = shallow(<CreativeQualities />).dive()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders an error if the fetch request fails', () => {
    const CreativeQualities = mockFetchResult({
      pending: false,
      rejected: true,
      reason: 'unauthorized',
      value: null,
    })

    const wrapper = shallow(<CreativeQualities />).dive()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders creative qualities once data has arrived', () => {
    const CreativeQualities = mockFetchResult({
      pending: false,
      rejected: false,
      reason: null,
      value: [],
    })

    const wrapper = shallow(<CreativeQualities />).dive()
    expect(wrapper).toMatchSnapshot()
  })
})
