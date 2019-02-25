import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory'
import { setCurrentUser } from './action/auth.action';
import requireAuthToken from './action/requireAuthToken';
import isAuthenticate from './components/Require_auth';
import DefaultLayout from './containers/DefaultLayout';
import './App.css';

export const history = createHistory()
const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  logger,
  routerMiddleware(history)
]

if(process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  
  if(typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

store.dispatch(setCurrentUser(localStorage.user?JSON.parse(localStorage.user):{}));
requireAuthToken(localStorage.token);

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <HashRouter>
            <Switch>
              <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
        </HashRouter>
      // </Provider>
    );
  }
}


{/* <Route exact path="/register" name="Register Page" component={Register} />
    <Route exact path="/404" name="Page 404" component={Page404} />
    <Route exact path="/500" name="Page 500" component={Page500} />
    <Route path="/" name="Home" component={IsAuthenticate(DefaultLayout)} />  */}

export default App;
