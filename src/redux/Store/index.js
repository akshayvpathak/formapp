import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import  { rootSaga }  from '../Sagas';
import reducer from '../Reducers';
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();

export const ConfigureStore = () => {
    const store = createStore(
        reducer, composeWithDevTools(
            applyMiddleware(sagaMiddleware,logger)
          )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
