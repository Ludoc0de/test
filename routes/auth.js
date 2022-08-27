//Routes Auth
const express = require('express')
const passport = require('passport')
const router = express.Router()

//Auth with Google
//GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile']}))

//Google auth callback
//GET /auth/google/callback
router.get('/google/callback', 
    passport.authenticate('google', {failureRedirect: '/'}), (req,res) => {
        res.redirect('/edit')
    }
)

//Logout User
//route /auth/logout
//!Change: Passport 0.6 requires logout to be async
router.get('/logout', (req,res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
})


module.exports = router