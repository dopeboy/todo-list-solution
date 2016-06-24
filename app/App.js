import React from 'react';
import { browserHistory, Router } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'jquery';
import 'tether';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="page-header">
                        <h1 className="text-xs-center">Manish Sinha</h1>
                    </div>
                    <Header/>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}
