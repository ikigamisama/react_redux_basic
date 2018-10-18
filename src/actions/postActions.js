import {  NEW_POST, FETCH_POSTS } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    console.log('fetching')
    axios.get('https://jsonplaceholder.typicode.com/posts')
    
        .then(response => {
            dispatch({
                type:FETCH_POSTS,
                payload:response.data
            })
        })
}

export const createPost = (postData) => dispatch => {
    console.log("POST ACTION CALLED");
    console.log('fetching')
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(posts=> {
        dispatch({
            type:NEW_POST,
            payload:posts
        })
    });
}