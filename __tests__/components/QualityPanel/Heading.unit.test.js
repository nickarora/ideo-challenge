import Heading from '~/components/QualityPanel/Heading'

describe('Heading', () => {
  it('renders the quality name with the provided background color', () => {
    const wrapper = shallow(
      <Heading
        quality={{
          name: 'Foo',
          color: '#333',
        }}
      >
        CONTENT
      </Heading>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
