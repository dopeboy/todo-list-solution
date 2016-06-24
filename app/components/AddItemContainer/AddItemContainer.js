import React from 'react';
import { Link } from 'react-router'
import './AddItemContainer.scss';

export default class AddItemContainer extends React.Component {
    state = {
        boxText: ''
    };

    static propTypes = {
        addItem: React.PropTypes.func.isRequired
    };

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

    updateBoxText = (e) => {
        this.setState({boxText: e.target.value});
    }

    addItem = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.boxText);  
        this.setState({boxText: ''});
    }
   
    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={this.updateBoxText} value={this.state.boxText} placeholder="Enter item"/>
                    </div>
                    <button type="submit" onClick={this.addItem} className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}
