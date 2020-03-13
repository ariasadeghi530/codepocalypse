
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
      document.getElementById('signInStatus').textContent = `Currently signed in as ${data.user}`
      axios.get('/api/items', {
        headers: {
          'Authorization': `Bearer ${data.token}`
        }
      })
      .then(({data}) => {
        
        document.getElementById('list').innerHTML = '';

        for(let i = 0; i < data.length; ++i){
          let item = document.createElement('li');
          item.classList = "list-group-item ";
          item.id = `${data[i]._id}`
          item.innerHTML = `${data[i].name}`;
          document.getElementById('list').append(item);
        }
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

  if(event.target.className === 'list-group-item'){
    console.log(event.target.id);
  }

})