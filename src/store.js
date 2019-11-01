import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/root.reducer'

export default function initStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
