import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// Redux Saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middlewares = [
        thunk,
        sagaMiddleware
    ];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore;