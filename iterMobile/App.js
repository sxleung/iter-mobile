import React, { Component } from "react";
import { View, Text, AppRegistry } from "react-native";
import { styles } from "./components/styles";
import { Provider } from "react-redux";
import { store } from "./components/store";

import { NearFutureView } from "./components/NearFutureView";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NearFutureView />
      </Provider>
    );
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);
