'use strict'

const store = require('../store.js')
const authUi = require('./ui')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully</p>')
  $('form').trigger('reset')

  store.user = response.user
  console.log(store)
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>User changed password successfully</p>')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

const onSpiceAddSuccess = function () {
  $('#auth-display').html('<p>Sauce added! You spicy-boi</p>')
}

const onSpiceAddFailure = function () {
  $('#auth-display').html('<p>Bad! No sauce for you!</p>')
}

const onIndexSuccess = function (response) {
  // $('.dumb').show()
  const spooces = response.spice_list
  console.log(response.spice_list)

  let spiceHtml = ''

  spooces.forEach(spice_list => {
    // console.log(spice_list)
    spiceHtml += `
    <div 
      <div> 
        Spice Name: ${spice_list.name} <br>Impact: ${spice_list.impact}
      </div>
          <button data-id=${spice_list._id} class="oh">Del</button>
  
     <form class="my" data-id=${spice_list._id} style="display:block">
      <input name="name" type="text" placeholder="Name your SPICE">
      <input class="hue" name="impact" type="text" placeholder="What do I do to your food?" size="30">
      <button type="submit" data-id=${spice_list._id} >Up-d</button>
        </form>
    </div>
    `
  })
  $('#dumber').html(spiceHtml)
  // can I do an .this('click').remove()
}

const onIndexFailure = function () {
  $('#auth-display').html('<p>Failure!</p>')
}

const onDestroySuccess = function () {
  $('#auth-display').html('<p>successfully deleted your spooce of choice</p>')
  console.log('hai')
}
const onDestroyFailure = function () {
  $('#auth-display').html('<p>Spice was NOT deleted, try again</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onSpiceAddSuccess,
  onSpiceAddFailure,
  onIndexSuccess,
  onIndexFailure,
  // onDestroy,
  onDestroySuccess,
  onDestroyFailure
  // onUpdateSuccess
}

/* failures
// const onDestroy = function () {
//   console.log('hai')
//   onDestroy()

// $('.oh').on('click', authUi.destroy)
// }
*/
