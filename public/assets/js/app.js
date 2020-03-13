
document.addEventListener('click', event => {
  
  if(event.target.id === 'signIn'){
    event.preventDefault();
    axios.post('/api/users/login', {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
    .then( ({data}) => {
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
      axios.get('/api/items', {
        headers: {
          'Authorization': `Bearer ${data.token}`
        }
      })
      .then((items) => {
        console.log(items);
      })
    })
    .catch(e => console.log(e));

  }

  if (event.target.id === 'createUser') {
    event.preventDefault();
    axios.post('/api/users/register', {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
      .then((response) => {
        console.log(response);
      })
      .catch(e => console.log(e));

  }

})