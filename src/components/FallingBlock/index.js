import React, { Component } from 'react';
import { Container } from './styles';

export default class FallingBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 0,
        };
        this.fall = this.fall.bind(this);
    }
    fall(e) {
        e.preventDefault();
        setInterval( () => {this.setState({ top: this.state.top + 1 });} ,1);
    }

    render() {
        return(
            <Container 
            style = {this.state}
            onClick={this.fall}
            />
        );
    }
}
