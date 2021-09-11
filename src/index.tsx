import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import App from "./App";

import rootReducer from "./reducers";
import postSaga from "./sagas/index";
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(postSaga);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);