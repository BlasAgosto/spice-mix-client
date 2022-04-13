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
    // this allows for params to request as req.body.SPICE!.owner
    // .spice is pretty much uselsess here. look into that.
    data: { spice: data }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newSpice
}
