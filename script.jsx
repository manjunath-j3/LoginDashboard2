import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.css";
import { createStore, applyMiddleware} from 'redux';
import { Provider} from "react-redux";   //to connect react and redux
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";  //wrapper around applyMiddleware
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer, //the whole tree, the whole state object
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('content')
);
