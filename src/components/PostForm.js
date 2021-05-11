import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

function PostForm(props) {

  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.createPost(formData);
  }

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Form</legend>
          <p><label>Title:</label></p>
          <p><input type="text" name="title" value={formData.title || ''} onChange={onChange} /></p>
          <p><label>Body:</label></p>
          <p><input type="text" name="body" value={formData.body || ''} onChange={onChange} /></p>
          <p><button type="submit" className="m-t-20">SUBMIT</button></p>
        </fieldset>
      </form>
    </div>
  );

}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}


export default connect(null, { createPost } )(PostForm);