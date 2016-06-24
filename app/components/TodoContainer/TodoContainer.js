import React from 'react';
import { Link } from 'react-router'
import './TodoContainer.scss';
import List from '../List/List';
import AddItemContainer from '../AddItemContainer/AddItemContainer';

export default class TodoContainer extends React.Component {
    state = {
        items: [] 
    };

    constructor(props) {
        super(props);
    }

    // ran *once* before the first render
    componentWillMount() {
        console.log("componentWillMount() called");
    }

    // ran once after the first render
    // you can access the virtual DOM here via this.getDOMNode()
    // AJAX requests go here
    componentDidMount() {
        console.log("componentDidMount() called");
    }

    // Runs after render()
    componentDidUpdate() {
    }

    // ran when a property changes. called before render
    // use it compare the new props to the old ones. if some action needs
    // to be taken, update the state
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps() called");
    }

    // called immediately before a component is unmounted
    componentWillUnmount() {
        console.log("componentWillUnmount() called");
    }

    // Without the fat arrow notation, updateLink() would have its
    // own "this". With the notation, "this" comes from the enclosing 
    // context (the parent class) enabling us to use
    // this.setState
    updateBoxText = (e) => {
        this.setState({boxText: e.target.value});
    }

    // This function gets passed to the additemcontainer
    // component. In that component, when a new item gets added,
    // this callback gets called which updates this state
    // which in turn re-renders itself and its children
    // namely the List component which gets the new list
    // of items via props
    addItem = (item) => {
        this.setState({items: this.state.items.concat(item)});
        return false;
    }

    editItem = (index, newText) => {
        this.state.items[index] = newText;
        this.setState({items: this.state.items});
    }

    removeItem = (index) => {
        this.state.items.splice(index,1);
        this.setState({items: this.state.items});
    }
   
    render() {
        return (
            <div id="todo-container-component">
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <AddItemContainer addItem={this.addItem} />
                        <ul className="list list-group">
                            <List items={this.state.items} editHandler={this.editItem} removeHandler={this.removeItem} />
                        </ul>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
            </div>
        )
    }
}
