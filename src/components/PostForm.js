import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';


class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        }
    }
    onChangeForm = (evt) => {
        let target = evt.target,
            value = target.value,
            name = target.name;

        this.setState({
            [name] : value
        })
    }
    onSubmitForm = (evt) => {
        evt.preventDefault();
        let post = {
            title:this.state.title,
            body:this.state.body
        };

        this.props.createPost(post);
        
    }
    render() {
        return (
        <React.Fragment>
            <h1>Posts Form</h1>
            <Form onSubmit={this.onSubmitForm.bind(this)}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" placeholder="Title" value={this.state.title} onChange={this.onChangeForm.bind(this)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="body">Body</Label>
                    <Input type="textarea" name="body" id="body" placeholder="Body" value={this.state.body}  onChange={this.onChangeForm.bind(this)}/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary">Submit</Button>
                </FormGroup>
            </Form>
        </React.Fragment>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null,{ createPost })(PostForm);
