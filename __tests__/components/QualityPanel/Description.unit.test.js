import Description from '~/components/QualityPanel/Description'

const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim in est quis dignissim. Morbi pulvinar risus ac euismod vestibulum. In feugiat felis vel semper.'

describe('Description', () => {
  it('renders a short description without a read more link', () => {
    const wrapper = shallow(
      <Description
        quality={{
          description: 'short description',
        }}
      >
        CONTENT
      </Description>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a long description by truncating and adding a read more link', () => {
    const wrapper = shallow(
      <Description
        quality={{
          description: longText,
        }}
      >
        CONTENT
      </Description>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('tapping readmore expands the full text', () => {
    const wrapper = shallow(
      <Description
        quality={{
          description: longText,
        }}
      >
        CONTENT
      </Description>
    )

    wrapper.find('#readmore-toggle').simulate('click')

    expect(
      wrapper
        .find('#readmore-toggle')
        .render()
        .text()
    ).toEqual('read less')
  })
})
