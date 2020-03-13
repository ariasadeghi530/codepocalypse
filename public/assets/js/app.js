let userToken;
document.addEventListener('click', event => {
  
  if(event.target.id === 'signIn'){
    event.preventDefault();
    axios.post('/api/users/login', {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
    .then( ({data}) => {
      userToken = data.token;
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
      document.getElementById('signInStatus').textContent = `Currently signed in as ${data.user}`
      axios.get('/api/items', {
        headers: {
          'Authorization': `Bearer ${data.token}`
        }
      })
      .then(({data}) => {
        
        console.log(data);
        document.getElementById('inventory').innerHTML = '';

        for(let i = 0; i < data.length; ++i){
          let item = document.createElement('button');
          item.classList = "dropdown-item";
          item.type = "button"; 
          item.id = `${data[i].name}`;
          item.innerHTML = `${data[i].name}`;
          document.getElementById('inventory').append(item);
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

  if(event.target.className === 'dropdown-item'){
    console.log(userToken)
    console.log(`Bearer ${userToken}`)
    axios.put(`/api/users/${event.target.id}`, {}, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    }).then(({data}) => {
      console.log(data);
      document.getElementById('list').innerHTML = '';
      for(let i = 0; i < data.items.length; ++i){
        let inventoryItem = document.createElement('li');
        inventoryItem.classList = "list-group-item";
        inventoryItem.innerHTML = `${data.items[i].name}`;
        document.getElementById('list').append(inventoryItem);
      }
    }).catch( e => console.log(e))
  }

})