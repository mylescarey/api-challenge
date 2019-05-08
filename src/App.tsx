import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import BookContainer from "./containers/bookContainer/bookContainer";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BookContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
