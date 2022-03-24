import { renderHook } from '@testing-library/react-hooks'

import { useProfile, ProfileProvider, ProfileProviderProps } from '.'
import { setStorageItem } from 'utils/localStorage'

describe('useProfile', () => {
  it('should return items and its info if there is any', () => {
    const wrapper = ({ children }: ProfileProviderProps) => (
      <ProfileProvider>{children}</ProfileProvider>
    )

    setStorageItem('profile', 'John Doe')

    const { result } = renderHook(() => useProfile(), { wrapper })

    expect(result.current.userName).toStrictEqual('John Doe')
  })
})
