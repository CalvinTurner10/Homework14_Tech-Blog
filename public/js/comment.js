const { response } = require("express");

const commentFormHandler = async function(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="post-id"]').value;
  const description = document.querySelector('textarea[name="comment-body"]').value;

  if (name && description) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if(response.ok){
      document.location.replace('/newprofile');
    } else{
      alert('failed')
    }

  }
};
 const deleteButtonHandler =async (event) =>{
   if (event.target.hasAttribute('data-id')){
     const id = event.target.getAttribute('data-id');

     const response =await fetch (`api/blog/${id}`,{
       method:'Delete',
     });
     if(reponse.ok){
       document.location.replace('/blog');
     } else {
       alert('failed')
     }
   }
 };