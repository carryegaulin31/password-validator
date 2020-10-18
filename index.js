function validatePassword(password) {
  if (password.length < 8) {
    return false
  } else if (password.search(/[0-9]/) === -1) {
    return false
  } else if (password.search(/[A-Z]/) === -1) {
    return false
  } else if (password.search(/[a-z]/) === -1) {
    return false
  } else if (password.search(/[/!/@/#/$/%/^/&/*/(/)/_/+/-/=/[/|/}/{/'/;/"/:///?/./>/,/</}/]]/) === -1) {
    return false
  }

  return true
}


module.exports = validatePassword