import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import budgetxReducer from '../reducers/budgetxReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, budgetxReducer);


export  let store = createStore(persistedReducer);
export  let persistor = persistStore(store);



