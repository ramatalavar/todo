import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [sagaMiddleware, routerMiddleware(history)];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
