import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import BookContainer from "./containers/bookContainer/bookContainer";
import Header from "./components/header/header";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <BookContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
