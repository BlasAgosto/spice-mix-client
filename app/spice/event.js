'use strict'

const authUi = require('./ui.js')
const authApi = require('./api.js')
// const authEvents = require('../app/spice/event')
const getFormFields = require('../../lib/get-form-fields.js')

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

const onIndex = function (event) {
  event.preventDefault()
  console.log('Let me see what we have here...')
  // start of promise chain. this function gets info from the thing. start next call
  authApi.index()
  // congrats on that now what
  // Promise chain completes it automatically sends data to the next line. in this case, KaleSoup. When promse completes, we begin the chain (then)
    .then(response => {
      console.log(response)
      // need the return to complete this promise, otherwise it would bled into kalesoup and that woudl be undefined
      return response
    })
    .then((response) => authUi.onIndexSuccess(response))
    .catch(error => console.log(error))
}
const onRefresh = function () {
  authApi
    .index()
    .then((response) => {
      return response
    })
    .then((response) => authUi.onIndexSuccess(response))
    .catch((error) => console.log(error))
}
const onDestroy = function (event) {
  event.preventDefault()
  console.log($(event.target))
  authApi
    .destroy($(event.target).data('id'))

    .then(authUi.onDestroySuccess)
    .then(onRefresh)
    .catch((error) => console.log(error))
}

const onUpdate = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  console.log('hue')

  authApi
    .update($(event.target).data('id'), data)
    .then(console.log('huehue'))
    .catch((error) => console.log(error))
  // authApi.update($(event.target).data('id'))
  // .then())
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSpiceAdd,
  onIndex,
  onDestroy,
  onUpdate

}

/* onDestroy failed attempts
//   .then(authUi.onDestroySuccess)
  //   .catch(authUi.onError)
  // console.log('4')
    // // .destroy(formData.response.spice_list._id)
  // console.log('3') */

/* module.exports fails
  // onSpiceDex
*/
