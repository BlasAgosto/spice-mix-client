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
    .then(nextPage())
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
    .then(signOutBois)
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
    .then(onDoingStoof)
    .catch(() => authUi.onSpiceAddFailure())
}
const onShowBook = function (event) {
  event.preventDefault()
  console.log("Here's your most recent spooce")

  authApi
    .show()

    .then((response) => {
      console.log(response)
      return response
    })
    .then((response) => authUi.onShowSuccess(response))
    // .then((response) =>
    //   console.log(response.spice_list[response.spice_list.length - 1]))
    .catch((error) => console.log(error))
}
const onIndex = function (event) {
  event.preventDefault()
  console.log('Let me see what we have here...')
  // start of promise chain. this function gets info from the thing. start next call
  authApi
    .index()
  // congrats on that now what
  // Promise chain completes it automatically sends data to the next line. in this case, KaleSoup. When promse completes, we begin the chain (then)
    .then((response) => {
      // const lastItem = response.spice_list[response.spice_list.length - 1]
      // console.log(response.spice_list[lastItem])
      // need the return to complete this promise, otherwise it would bled into kalesoup and that woudl be undefined
      return response
    })
    .then((response) => authUi.onIndexSuccess(response))
    .catch((error) => console.log(error))
}
// const onRefresh = function () {
//   authApi
//     .index()
//     .then((response) => {
//       return response
//     })
//     .then((response) => authUi.onIndexSuccess(response))
//     .catch((error) => console.log(error))
// }
const onDoingStoof = function () {
  authApi
    .index()
    .then((response) => {
      return response
    })
    .then((response) => authUi.onDoingAThing(response))
    .catch((error) => console.log(error))
}
const onDestroy = function (event) {
  event.preventDefault()
  console.log($(event.target))
  authApi
    .destroy($(event.target).data('id'))

    .then(authUi.onDestroySuccess)
  // .then(onRefresh)
    .then(onDoingStoof)
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

function nextPage () {
  const element = document.getElementById('popMain')
  element.style.display = 'none'
  const elementOne = document.getElementById('inside')
  elementOne.style.display = 'block'
  const elementTwo = document.getElementById('spice-list')
  elementTwo.style.display = 'block'
  const elementThree = document.getElementById('spice-name')
  elementThree.style.display = 'block'
  const elementFour = document.getElementById('spiceRack')
  elementFour.style.display = 'block'
  const elementFive = document.getElementById('showSpice')
  elementFive.style.display = 'block'
  const elementSix = document.getElementById('dumber')
  elementSix.style.display = 'block'
}

function signOutBois () {
  const element = document.getElementById('popMain')
  element.style.display = 'block'
  const elementOne = document.getElementById('inside')
  elementOne.style.display = 'none'
  const elementTwo = document.getElementById('spice-list')
  elementTwo.style.display = 'none'
  const elementThree = document.getElementById('spice-name')
  elementThree.style.display = 'none'
  const elementFour = document.getElementById('spiceRack')
  elementFour.style.display = 'none'
  const elementFive = document.getElementById('showSpice')
  elementFive.style.display = 'none'
  const elementSix = document.getElementById('dumber')
  elementSix.style.display = 'none'
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSpiceAdd,
  onIndex,
  onDestroy,
  onUpdate,
  onShowBook,
  signOutBois
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
