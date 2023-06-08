import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import { store } from './store'
import './styles.css'
import { AppTheme } from './theme/AppTheme.jsx';
import { AppJournal } from './AppJournal.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <BrowserRouter>
          <AppJournal />
        </BrowserRouter>
      </AppTheme>    
    </Provider>
  </React.StrictMode>,
)
