import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.css";
import { createStore, applyMiddleware} from 'redux';
import { Provider} from "react-redux";   //to connect react and redux
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <BrowserRouter>
      <Provider>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('content')
);
