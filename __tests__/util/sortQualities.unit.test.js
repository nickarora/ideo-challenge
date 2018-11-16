import sortQualities from '~/util/sortQualities'

const mockQualities = [
  {
    name: 'Apple',
    score: 20,
  },
  {
    name: 'Baby',
    score: 30,
  },
  {
    name: 'Cat',
    score: 10,
  },
]

describe('sortQualities', () => {
  it('sorts by score/ascending', () => {
    const results = sortQualities(mockQualities, {
      sortOrder: 'SCORE',
      scoreAscending: true,
      nameAscending: true,
    })

    expect(results).toEqual([
      mockQualities[2],
      mockQualities[0],
      mockQualities[1],
    ])
  })

  it('sorts by score/descending', () => {
    const results = sortQualities(mockQualities, {
      sortOrder: 'SCORE',
      scoreAscending: false,
      nameAscending: true,
    })

    expect(results).toEqual([
      mockQualities[1],
      mockQualities[0],
      mockQualities[2],
    ])
  })

  it('sorts by name/ascending', () => {
    const results = sortQualities(mockQualities, {
      sortOrder: 'NAME',
      scoreAscending: false,
      nameAscending: true,
    })

    expect(results).toEqual([
      mockQualities[0],
      mockQualities[1],
      mockQualities[2],
    ])
  })

  it('sorts by name/descending', () => {
    const results = sortQualities(mockQualities, {
      sortOrder: 'NAME',
      scoreAscending: false,
      nameAscending: false,
    })

    expect(results).toEqual([
      mockQualities[2],
      mockQualities[1],
      mockQualities[0],
    ])
  })
})
