import Score from '~/components/QualityPanel/Score'

describe('Score', () => {
  it('renders the given score', () => {
    const wrapper = shallow(
      <Score
        quality={{
          score: -25,
        }}
      >
        CONTENT
      </Score>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
