import React, { Component } from "react";
import {SMALL, BIG} from '../constants/fontSizes'

const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "small"
  };

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === "small" ? "big" : "small"
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };