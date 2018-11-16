import Progress from '~/components/QualityPanel/ProgressBar/Progress'

describe('Progress', () => {
  it('renders with a given progress and color', () => {
    const wrapper = shallow(<Progress progress={50} color={'#333'} />)
    expect(wrapper).toMatchSnapshot()
  })
})
