import React, { Component } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

class Duties extends Component {
    render() {
        return (
            <div className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{this.props.duty}</p>
            </div>
        );
    }
}

export default Duties;
