'use strict'

const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
// const importBoardFuncs = require('../app.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('signing up')
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('signing in')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .changePassword(data)
    .then(() => authUi.onChangePasswordSuccess())
    .catch(() => authUi.onChangePasswordFailure())
}

const onSignOut = function () {
  console.log('trying to sign out')
  authApi
    .signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

const onSpiceAdd = function (event) {
  event.preventDefault()
  console.log('Making spooces for yoUwU')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .newSpice(data)
    .then(() => authUi.onSpiceAddSuccess())
    .catch(() => authUi.onSpiceAddFailure())
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSpiceAdd
}