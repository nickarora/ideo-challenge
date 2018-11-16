import App, { StyledHeader } from '~/components/App'
import CreativeQualities from '~/components/CreativeQualities'
import CreativeQualitySortOrder from '~/components/CreativeQualitySortOrder'

jest.mock('assets/images/qualityIcons/collaboration.png', () => 'img')
jest.mock('assets/images/qualityIcons/empowerment.png', () => 'img')
jest.mock('assets/images/qualityIcons/purpose.png', () => 'img')
jest.mock('react-refetch', () => {
  class PromiseState {
    pending = false
    rejected = false
    value = null

    constructor(value) {
      this.value = value
    }
  }

  return {
    connect: () => Component => () => (
      <Component creativeQualitiesFetch={new PromiseState([])} />
    ),
    PromiseState,
  }
})

let wrapper
beforeEach(() => {
  wrapper = shallow(<App />)
})

describe('App', () => {
  it('renders a row', () => {
    expect(wrapper.find('.row').exists()).toBeTruthy()
  })

  it('renders a StyledHeader with "Creative Qualities"', () => {
    expect(
      wrapper
        .find(StyledHeader)
        .render()
        .text()
    ).toEqual('Creative Qualities')
  })

  it('renders a CreativeQualities', () => {
    expect(wrapper.find(CreativeQualities).exists()).toBeTruthy()
  })

  it('renders a CreativeQualitySortOrder', () => {
    expect(wrapper.find(CreativeQualitySortOrder).exists()).toBeTruthy()
  })
})
