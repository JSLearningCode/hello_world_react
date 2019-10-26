import React, { Component } from 'react';

import { Container } from './styles';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.props = {
            key: 0,
            text:''
        }
    }
    render() {
        return(
            <Container id={ this.props.key } >{ this.props.text }</Container>
        );
    }
}