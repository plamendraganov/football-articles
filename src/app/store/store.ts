import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import { reducer } from './reducer';

declare var window: any;

const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension) ? window.devToolsExtension() : (f) => f;

export const store = createStore(reducer, compose(devToolsExtension) as GenericStoreEnhancer);