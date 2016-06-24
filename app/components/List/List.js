import React from 'react';
import { Link } from 'react-router'
import './List.scss';
import ListItem from '../ListItem/ListItem';

export default class List extends React.Component {
    state = {
    }

    static propTypes = {
        items: React.PropTypes.array.isRequired,
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

    componentWillReceiveProps(nextProps) {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="list-group">
                { this.props.items.length == 0 ?
                    <span>You have no items on your to-do list you lazy bum</span> :
                    this.props.items.map((item, index) => 
                    <ListItem key={index} itemIndex={index} itemText={item} editHandler={this.props.editHandler} removeHandler={this.props.removeHandler} />
                )}
            </div>
        )
    }
}
