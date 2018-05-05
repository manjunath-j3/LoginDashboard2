import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.css";

ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById('content')
);
