import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

function Posts(props) {

  // fetchPosts is within props
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

// mapStateToProps - get the state from Redux and map it to the components props
const mapStateToProps = (state) => ({
  posts: state.posts.items
})

// connects components to the Redux store
export default connect(mapStateToProps, { fetchPosts })(Posts);

