import React, { Component } from 'react';

class Companies extends Component {
    state = {
        selected: false,
    };
    handleClick = () => {
        this.props.selectCompany(this.props.order);
        this.setState({ selected: !this.state.selected });
        console.log(this.state);
    };
    buttonClasses = () => {
        let classes = 'job-btn ';
        if (this.state.selected) {
            classes += 'active-btn';
        } else {
            classes = 'job-btn ';
        }
        return classes;
    };
    render() {
        return (
            <button onClick={this.handleClick} className={this.buttonClasses()}>
                {this.props.company}
            </button>
        );
    }
}

export default Companies;
