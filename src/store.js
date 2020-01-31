import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import rootSaga from "./sagas";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(rootSaga);

  return store;
}
