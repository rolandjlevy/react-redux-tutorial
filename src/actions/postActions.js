import { FETCH_POSTS, NEW_POST } from './types';

// dispatch the data to the reducer
// dispatch is a bit like a resolver in a promise

export const fetchPosts = () => {
  return function(dispatch) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
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
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
      })
    );
  }
}