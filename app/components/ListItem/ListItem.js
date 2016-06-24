import React from 'react';
import { Link } from 'react-router'
import './ListItem.scss';

export default class ListItem extends React.Component {
    state = {
        text: '',
        editMode: false,
        buttonText: "edit"
    }

    static propTypes = {
        itemIndex: React.PropTypes.number.isRequired,
        itemText: React.PropTypes.string.isRequired,
        editHandler: React.PropTypes.func.isRequired,
        removeHandler: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }
    
    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

    componentWillUnmount() {
    }
   
    editItem = (index, newText) => {
        if (this.state.editMode == false)
            this.setState({text: this.props.itemText, editMode: true, buttonText: "save"});
        
        else {
            this.props.editHandler(index, this.state.text);
            this.setState({text:'', editMode: false, buttonText: "edit"});
        }
    }

    removeItem = (index) => {
        this.props.removeHandler(index);
    }

    updateText = (e) => {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <li className="list-group-item"  key={this.props.itemIndex} className="list-group-item">
                { this.state.editMode ? 
                    <input type="text" onChange={this.updateText} defaultValue={this.props.itemText} /> :
                    <span>{this.props.itemText}</span>
                 }
                <button type="submit" onClick={this.editItem.bind(this, this.props.itemIndex) } className="pull-xs-right btn">{this.state.buttonText}</button>
                <button type="submit" onClick={this.removeItem.bind(this, this.props.itemIndex) } className="pull-xs-right btn">remove</button>
            </li>
        )
    }
}
