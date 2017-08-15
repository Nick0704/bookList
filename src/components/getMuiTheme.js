import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue700, grey300, blueGrey900 } from 'material-ui/styles/colors';

const muiThemeVariables = {
  sidebarWidth: 220,
  sidebarColor: blueGrey900,
  toolbarHeight: 48,
  tollbarColor: grey300
};

export const spacing = {
  desktopDrawerMenuItemHeight: 32,
  desktopDropDownMenuFontSize: 15,
  desktopDropDownMenuItemHeight: 24,
  desktopGutter: 16,
  desktopGutterLess: 8,
  desktopGutterMini: 4,
  desktopGutterMore: 24,
  desktopKeylineIncrement: 48,
  desktopSubheaderHeight: 32,
  desktopToolbarHeight: 56,
};

export const palette = {
  primary1Color: blue500,
  primary2Color: blue700
};

export const drawer = {
  width: muiThemeVariables.sidebarWidth,
  color: muiThemeVariables.sidebarColor
};

export const toolbar = {
  height: muiThemeVariables.toolbarHeight,
  backgroundColor: muiThemeVariables.tollbarColor
};

export default getMuiTheme({
  palette,
  spacing,
  drawer,
  toolbar
});