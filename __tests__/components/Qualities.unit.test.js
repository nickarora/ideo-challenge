import Qualities from '~/components/Qualities'

jest.mock('assets/images/qualityIcons/collaboration.png', () => 'img')
jest.mock('assets/images/qualityIcons/empowerment.png', () => 'img')
jest.mock('assets/images/qualityIcons/purpose.png', () => 'img')
jest.mock('~/util/sortQualities', () => arr => arr)
jest.mock('react-redux', () => ({
  connect: () => Component => props => (
    <Component
      {...props}
      sortConfig={{
        sortOrder: 'SCORE',
        scoreAscending: true,
        nameAscending: true,
      }}
    />
  ),
}))

const mockQualites = [
  {
    name: 'Foo',
    color: '#333',
    description: 'some description',
    score: 50,
  },
  {
    name: 'Bar',
    color: '#AAA',
    description: 'other description',
    score: -25,
  },
]

describe('Qualities', () => {
  it('renders a list of qualities', () => {
    const wrapper = shallow(<Qualities qualities={mockQualites} />).dive()
    expect(wrapper).toMatchSnapshot()
  })
})
