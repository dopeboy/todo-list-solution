import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { browserHistory, IndexRoute, Router, Route, Link, withRouter } from 'react-router'
import TodoContainer from './components/TodoContainer/TodoContainer';
import About from './components/About/About';

// Routes
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={TodoContainer}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('root'));
