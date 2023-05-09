import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('useForm custom hook tests', () => { 
    const initialForm = {
        name: 'John Doe',
        email: 'carli@perri.com'
    }
    test('should return default values', () => {

    const { result } = renderHook(() => useForm(initialForm))
    const { formState, onInputChange, onResetForm } = result.current
    expect(formState).toEqual(initialForm)
    expect(typeof onInputChange).toBe('function')
    expect(typeof onResetForm ).toBe('function')
    })

    test('should change name in form', () => {
            //render the hook
            const { result } = renderHook(() => useForm(initialForm))
            //destructure methods from result.current
            const { onInputChange } = result.current
            //prepare new value for name input in form
            const newName = 'Carli Perri'
            //get whats currently under name in form
            const { name } = result.current.formState
            // expect forma to have initial values
            expect(name).toBe('John Doe')
            //change name in form using extracted method and prepared value
            act(() => {
                onInputChange({ target: { name: 'name', value: newName } })
            }) 
            console.log('FORM',result.current.formState)               
            const { name: newNameState } = result.current.formState
            console.log('NEW',newNameState)
            expect(newNameState).toBe(newName)
    })

    test('should reset form', () => {
        //render the hook
        const { result } = renderHook(() => useForm(initialForm))
        //destructure methods from result.current
        const { onInputChange, onResetForm } = result.current
        //prepare new value for name input in form
        const newName = 'Carli Perri'
        //get whats currently under name in form
        const { name } = result.current.formState
        // expect forma to have initial values
        expect(name).toBe('John Doe')
        //change name in form using extracted method and prepared value
        
        act(() => {
            onInputChange({ target: { name: 'name', value: newName } })
            onResetForm()
        }) 
        //get whats currently under name in form
        const { name: resetNameState } = result.current.formState
        // expect forma to have reseted values
        expect(resetNameState).toBe(initialForm.name)
    
    })

 })