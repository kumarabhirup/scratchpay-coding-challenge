import { renderHook } from '@testing-library/react-hooks'

import useLocalStorage from '../hooks/useLocalStorage'

describe('useLocalStorage', () => {
  const initialValue = 'SeaSaw'

  it('returns state', () => {
    const { result } = renderHook(() => useLocalStorage('state1', initialValue))

    expect(result.current[0]).toBe(initialValue)

    expect(typeof result.current[1]).toBe('function')
  })
})
