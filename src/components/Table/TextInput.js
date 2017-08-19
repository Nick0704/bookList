import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import { blueGrey50 } from 'material-ui/styles/colors';

const inputStyleEnabled = {
    backgroundColor: blueGrey50,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#000'
  },
  inputStyleDisabled = {
    paddingLeft: 5,
    paddingRight: 5,
  };

class TextInput extends Component {
  render() {
    const {disabled, name, value, handleInputChange} = this.props;
    let inputStyle = (disabled) ? inputStyleDisabled : inputStyleEnabled;
    return (
      <TextField
        style={{width: '100%'}}
        underlineDisabledStyle={{display: 'none'}}
        onChange={handleInputChange}
        {...{ name, value, disabled, inputStyle }}
      />
    )
  }
}

export default TextInput;