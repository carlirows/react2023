import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('useCounter custom hook tests', () => {
    it('should return default values', () => {
        const { result } = renderHook(() => useCounter())
        expect(result.current.counter).toBe(10)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })

    it('should return counter value 100', () => {
        const { result } = renderHook(() => useCounter(100))
        expect(result.current.counter).toBe(100)
    })

    it('should increment counter value by 1', () => {
        const { result } = renderHook(() => useCounter(10))
        console.log(result.current)
        const { increment, reset } = result.current
        act(() => {
            reset()
            increment()        
        })
        expect(result.current.counter).toBe(11)
    })

    it('should decrement counter value by 1', () => {
        const { result } = renderHook(() => useCounter(10))
        const { decrement } = result.current
        act(() => {
            decrement()        
            decrement(2)        
        })
        expect(result.current.counter).toBe(7)
    })

    it('should reset counter value to 10', () => {
        const { result } = renderHook(() => useCounter(10))
        const { increment, reset } = result.current
        act(() => {
            increment()        
            reset()        
        })
        expect(result.current.counter).toBe(10)
    })

})