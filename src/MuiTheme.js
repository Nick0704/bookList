import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './components/getMuiTheme';

injectTapEventPlugin();

class MuiTheme extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider { ... { muiTheme } }>
        <div className="app-container">
          { children }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MuiTheme;