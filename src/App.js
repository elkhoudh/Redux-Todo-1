import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
const theme = createMuiTheme({
  palette: {
    primary: cyan,
    type: "dark"
  }
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Modal />
      </MuiThemeProvider>
    );
  }
}

export default App;
