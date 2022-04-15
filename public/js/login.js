const loginHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
   if (username && password) {
     const response =await fetch ('/api/users/login',{
       method: 'POST',
       body: JSON.stringify({username, password}),
       headers:{'Content-Type': 'application/json'},
     });
     if (reponse.ok){
       document.location.replace('/profile');
     } else{
       alert (response.statusText)
     }
   }
  };
  
const signupFormHandler = async (event) =>{
  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  if (username && password) {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to login');
  }
}
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginHandler);
