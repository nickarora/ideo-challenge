import Card from '~/components/QualityPanel/Card'

describe('Card', () => {
  it('renders children with a given color', () => {
    const wrapper = shallow(
      <Card
        quality={{
          color: '#333',
        }}
      >
        CONTENT
      </Card>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
