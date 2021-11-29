import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  useDispatch as _useDispatch,
  useSelector as _useSelector,
  TypedUseSelectorHook,
} from "react-redux";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
export const useDispatch = _useDispatch;

export interface RootState {}

export const rootStateDefault = {};

const rootReducer = combineReducers<RootState>({});

function* rootSaga() {
  yield all([
    /* sagas ie authSaga() */
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({ trace: true });

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
