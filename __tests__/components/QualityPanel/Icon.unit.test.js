import Icon from '~/components/QualityPanel/Icon'

jest.mock(
  'assets/images/qualityIcons/collaboration.png',
  () => 'collaboration-img'
)
jest.mock('assets/images/qualityIcons/empowerment.png', () => 'empowerment-img')
jest.mock('assets/images/qualityIcons/purpose.png', () => 'purpose-img')

describe('Icon', () => {
  it('renders the correct icon for collaboration', () => {
    const wrapper = shallow(
      <Icon
        quality={{
          name: 'Collaboration',
        }}
      >
        CONTENT
      </Icon>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the correct icon for purpose', () => {
    const wrapper = shallow(
      <Icon
        quality={{
          name: 'Purpose',
        }}
      >
        CONTENT
      </Icon>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the correct icon for empowerment', () => {
    const wrapper = shallow(
      <Icon
        quality={{
          name: 'Empowerment',
        }}
      >
        CONTENT
      </Icon>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
