import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { lightGreen500 } from 'material-ui/styles/colors';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { isEmpty, isEqual } from 'lodash';
import TextInput from './TextInput';

const style = {
    marginLeft: 5,
    marginRight: 5,
    minWidth: 60,
    height: 28,
    width: 90
  },
  buttonStyle = {
    fontSize: 12
  },
  acceptButtonStyle = {
    fontSize: 12,
    backgroundColor: lightGreen500
  };
class BookTableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      title: null,
      author: null,
      date: null
    }
  }
  componentWillMount(){
    const {title, author, date} = this.state;
    !isEmpty(title) || this.setState({title: this.props.title});
    !isEmpty(author) || this.setState({author: this.props.author});
    !isEmpty(date) || this.setState({date: this.props.date});
  }
  componentWillReceiveProps(nextProps) {
    let {title, author, date} = nextProps;
    if (isEqual(this.props, nextProps)) this.setState({ title: title, author: author, date: date})
  }
  toggleEdit = (e) => {
    this.setState({isDisabled: !this.state.isDisabled});
    if (!this.state.isDisabled) e.target.buttonStyle = {backgroundColor: lightGreen500}
  };
  handleInputChange = (e) => {
    let {name} = e.target;
    name.indexOf('title') === -1 ||  this.setState({title: e.target.value});
    name.indexOf('author') === -1 ||  this.setState({author: e.target.value});
    name.indexOf('date') === -1 ||  this.setState({date: e.target.value});
  };
  render() {
    const {id} = this.props,
          {handleInputChange} = this,
          {title, author, date} = this.state;
    let {isDisabled} = this.state,
        buttonLabel = (isDisabled) ? 'Edit' : 'Accept',
        acceptButton = (isDisabled) ? buttonStyle : acceptButtonStyle;
    return (
      <TableRow>
        <TableRowColumn>
         <TextInput disabled={isDisabled} value={title} name={`title-${id}`} {...{handleInputChange}} />
        </TableRowColumn>
        <TableRowColumn>
          <TextInput disabled={isDisabled} value={author} name={`author-${id}`} {...{handleInputChange}}/>
        </TableRowColumn>
        <TableRowColumn>
          <TextInput disabled={isDisabled} value={date} name={`date-${id}`} {...{handleInputChange}}/>
        </TableRowColumn>
        <TableRowColumn>
          <RaisedButton label={buttonLabel} primary={true} style={style} buttonStyle={acceptButton} onClick={this.toggleEdit}/>
          <RaisedButton label="Delete" secondary={true} style={style} buttonStyle={buttonStyle}/>
        </TableRowColumn>
      </TableRow>
    )
  }
}
export default BookTableHeader;