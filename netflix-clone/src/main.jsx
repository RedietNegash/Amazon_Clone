import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from '../../Front_End/src/Components/Context/StateProvider.jsx'
import reducer,{initialState} from '../../Front_End/src/Components/Reducer/Reducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
)
