import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom/client';

import TwoNameInputPage from './assets/TwoNameInput';
const router = createBrowserRouter([]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>site-name</div>
      </div>
      <div>
        <div>2 Player</div>
        <div>3 Player</div>
        <div>4 Player</div>
      </div>
    </>
  )
}

export default App