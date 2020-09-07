import React, { Component } from 'react';

class Example extends Component {
    render() {
        return (
            <div className="example">
                <h3>Example component</h3>
                <p>{this.props.example}</p>
            </div>
        )
    }
}

export default Example;