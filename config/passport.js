const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        let user
        try {
          user = await User.findOne({ email: email.toLowerCase() })
          if (!user) {
            // if there is no user, follow the standard node callback.
            return done(null, false, { msg: `Email ${email} not found.` })
          }
          if (!user.password) {
            // if a user exists but theres no password attached to it - it must be oauth (not implemented yet)
            return done(null, false, {
              msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.'
            })
          }
        } catch (e) {
          return done(e)
        }
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            // there is an error, no match etc return the result
            return done(err)
          }
          if (isMatch) {
            // if they match return here
            return done(null, user)
          }
          return done(null, false, { msg: 'Invalid email or password.' })
        })
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}
