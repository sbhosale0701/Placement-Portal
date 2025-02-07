require("dotenv").config(); // Load environment variables at the top

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID, // Google Client ID
            clientSecret: process.env.CLIENT_SECRET, // Google Client Secret
            callbackURL: "/auth/google/callback",scope:["profile","email"] // Redirect URI
        },
        function (accessToken, refreshToken, profile, callback) {
            // Pass Google profile to callback
            return callback(null, profile);
        }
    )
   
);
passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    done(null, user)
  })

module.exports = passport;
