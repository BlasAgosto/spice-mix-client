'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newSpice = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/spice-mix',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: { spice: data }
  })
}
// THIS IS THE API CALL to the API ....apparently this entirely file is.
//  look into that...
const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/spice-mix',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/spice-mix/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, data) {
  console.log(id, data)
  return $.ajax({
    url: config.apiUrl + '/spice-mix/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: { spice: data }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newSpice,
  index,
  destroy,
  update

  // spiceDex
}
