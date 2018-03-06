import React, { Component } from 'react';

class MyFirstComponent extends Component{
    render(){
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}

export default MyFirstComponent