import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

function Posts(props) {

  // fetchPosts is within props

  // Trying to convert ComponentWillReceiveProps to hooks

  // https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/
  // https://glennstovall.com/how-to-use-useeffect-and-other-hooks-in-class-components/

  // componentWillMount() {
  //   this.props.fetchPosts();
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.posts.unshift(nextProps.newPost);
  //   }
  // }

  useEffect(() => {
    if (!props.loading) {
      props.fetchPosts();
      props.posts.unshift(props.newPost);
      console.log('!props.loading: fetchPosts()');
    } 
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
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

// mapStateToProps - get the state from Redux and map it to the components props
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
  loading: state.posts.loading
});

// connects components to the Redux store
export default connect(mapStateToProps, { fetchPosts })(Posts);

