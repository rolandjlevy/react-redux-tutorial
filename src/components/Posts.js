import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

function Posts(props) {

  // const [posts, setPosts] = useState([]);
  
  // const url = 'https://jsonplaceholder.typicode.com/posts';

  // const getPosts = () => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setPosts(data));
  // }

  useEffect(() => {
    props.fetchPosts();
  }, [props]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
      {props.posts.length && (props.posts.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
        )
      ) || 'Loading...')}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);

