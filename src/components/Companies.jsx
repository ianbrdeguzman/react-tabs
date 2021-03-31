import React, { Component } from 'react';

class Companies extends Component {
    render() {
        console.log();
        return (
            <button
                onClick={() => this.props.selectCompany(this.props.index)}
                className={`job-btn ${
                    this.props.value === this.props.index && 'active-btn'
                }`}
            >
                {this.props.exp.company}
            </button>
        );
    }
}

export default Companies;
