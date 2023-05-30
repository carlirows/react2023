import reactLogo from './assets/react.svg'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/slices/counter'
import './App.css'

function App() {

  const { counter} = useSelector( state => state.counter )
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>count is {counter}</p>
        <button onClick={()=> dispatch( increment() )}>
          Increment
        </button>
        <button onClick={()=> dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={()=> dispatch( incrementByAmount(2) )}>
          Increment by 2
        </button>

   

    </>
  )
}

export default App
