import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import RedColorControl from "./components/redColorControl";
import GreenColorControl from "./components/greenColorControl";
import BlueColorControl from "./components/blueColorControl";
import DisplayColor from "./components/displayColor";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <div className="display-5 my-4">R.G.B. Color Controller</div>
              <RedColorControl />
              <br />
              <GreenColorControl />
              <br />
              <BlueColorControl />
              <DisplayColor />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
