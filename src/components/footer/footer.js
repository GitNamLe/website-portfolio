import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="copyright">NAM LE &#169; 2018</div>
            </div>
        )
    }
}

export default Footer;