import ProgressBar from '~/components/QualityPanel/ProgressBar'

describe('ProgressBar', () => {
  it('renders with a positive score', () => {
    const wrapper = shallow(
      <ProgressBar
        quality={{
          score: 50,
          color: '#333',
        }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with a negative score', () => {
    const wrapper = shallow(
      <ProgressBar
        quality={{
          score: -50,
          color: '#333',
        }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with a score of zero', () => {
    const wrapper = shallow(
      <ProgressBar
        quality={{
          score: -50,
          color: '#333',
        }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
