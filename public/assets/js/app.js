document.addEventListener('click', event => {
  if (event.target.id === 'signIn') {
    event.preventDefault()
    axios.post('/api/users/login', {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
  }
  if (event.target.id === 'createUser') {
    event.preventDefault()
    axios.post('/api/users/register', {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
  }
})