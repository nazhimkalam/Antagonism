import { createStore, combineReducers, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { userReducer } from './reducers/userReducer';

declare global {
	interface Window {
	  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	user: userReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,composeEnhancers());
const persister = persistStore(store);

export { store, persister };