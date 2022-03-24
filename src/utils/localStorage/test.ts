import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    window.localStorage.setItem('MiguelMachado_test', JSON.stringify('1'))

    expect(getStorageItem('test')).toStrictEqual('1')
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('test', ['1', '2'])

    expect(window.localStorage.getItem('MiguelMachado_test')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
