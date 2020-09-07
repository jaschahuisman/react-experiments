import React, { Component } from 'react';
import './App.css'
import Example from './components/Example';

class App extends Component {
    state = {
        example: "Example text"
    }

    render() {

        return (
            <div>
                <h1>React Document</h1>
                <Example example={this.state.example} />
                <Example example={this.state.example} />
            </div>
        )
    }
}

export default App;