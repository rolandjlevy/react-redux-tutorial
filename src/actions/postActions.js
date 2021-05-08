import { FETCH_POSTS, NEW_POST } from './types';

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