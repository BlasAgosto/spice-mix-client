// use require without a reference to ensure a file is bundled
// require('./example')

'use strict'

const authEvents = require('../app/spice/event')
// const authApi = require('./spice/api')
// const authUi = require('./spice/ui')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#spice-name').on('submit', authEvents.onSpiceAdd)
  $('#showSpice').on('click', authEvents.onIndex)
  $('#dumber').on('click', '.oh', authEvents.onDestroy)
  $('#dumber').on('submit', '.my', authEvents.onUpdate)

  // $('#showSpice').on('click', console.log(authEvents.onIndex()))
  // $('.dumb').on('click', onClick)
})

// const newSpooce = function () {
//   $('#showSpice').on('click', authEvents.onIndex)
// }
