import axios from 'axios'


export const BaseURL = 'http://192.168.0.10:5000'

export const register = newUser => {
  return axios
    .post('http://192.168.0.10:8000/api', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('http://192.168.0.10:8000/api', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response
    })
    .catch(err => {
      console.log(err)
    })
}

export const get = value => {
  return axios
    .get(BaseURL + value.url)
    .then(response => {
      console.log(response)
      return response;
    })
    .catch(err => {
      console.log(err)
    })
}

export const post = value => {
  return axios
    .post(BaseURL + value.url, value.data)
    .then(response => {
      console.log(response)
      return response;
    })
    .catch(err => {
      console.log(err)
    })
}


