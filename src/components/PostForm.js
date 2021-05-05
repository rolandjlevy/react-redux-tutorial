import React, { useState } from 'react';

function PostForm() {

  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }
  
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log(data));
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

export default PostForm;