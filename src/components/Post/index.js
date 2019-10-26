import React, { Component } from 'react';
import { Container } from './styles';
import Comment from '../Comment/index';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { text: '' }
            ],
            commentBox: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    };

    handleTextChange(event) {
        this.setState({ commentBox: event.target.value });
    };

    handleSubmit(event) {
        this.setState({ 
            comments: [
                ...this.state.comments,
                { text: this.state.commentBox }
            ] 
        });
        this.setState({ commentBox: '' });
        event.preventDefault();
    };

    render(){ 
        return(
            <Container>
                <p>Barra do Comentário</p>
                <form onSubmit={ this.handleSubmit } >
                    <input 
                        placeholder='Comente aqui!!!' 
                        value={this.state.commentBox} 
                        onChange={ this.handleTextChange }/>
                    <button type='submit'>Comentar</button>
                </form>
                {this.state.comments.map( (comment, index) => {
                    return <Comment key={index} text={comment.text} />
                } )}
            </Container>
        );
    }
}