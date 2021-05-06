import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts() {
  return function(dispatch) {
    // console.log('fetchPosts');
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
  }
}