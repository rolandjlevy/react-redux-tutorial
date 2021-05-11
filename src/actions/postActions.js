import { FETCH_POSTS, NEW_POST } from './types';

// dispatch the data to the reducer
// dispatch is a bit like a resolver in a promise

// action creator returns an action
// thunk enables us to return a function instead of an action object

export const fetchPosts = () => {
  return function(dispatch) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(posts => {
      console.log('postActions > fetchPosts()', posts);
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
        loading: false
      });
    });
  }
}

export const createPost = (postData) => {
  return function(dispatch) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => {
      console.log('postActions > createPost()', postData);
      dispatch({
        type: NEW_POST,
        payload: post,
        loading: false
      });
    });
  }
}