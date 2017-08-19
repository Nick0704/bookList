import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import BookTable from './components/Table/Table';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BookTable books={this.props.testStore}/>
      </MuiThemeProvider>
    )
  }
}

export default App;