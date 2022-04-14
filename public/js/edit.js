const editHandler = async (event) => {


    const name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
  
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      
  
      const response = await fetch(`/api/Blogs/${id}`, {
        method: 'put',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/new');
      } else {
        alert('Failed to update blog');
      }
    }
  };
  
  document
  .querySelector('.edit')
  .addEventListener('click', editHandler);