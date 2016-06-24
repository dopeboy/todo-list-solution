import React from 'react';
import { Link } from 'react-router';
import './Footer.scss';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">
                        <Link to="/">home</Link>
                        &nbsp; &nbsp; 
                        <Link to="/about">about</Link>
                    </span>
                </div>
            </footer>
        )
    }
}
