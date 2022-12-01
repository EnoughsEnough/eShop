import ReactDOM from 'react-dom/client'
import './index.css'
import { Navigation } from './Navigation'
import { Provider } from 'react-redux'
import { store } from './components/store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Navigation />
  </Provider>
)
