const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
const validateProfileInput = require('../../validation/profile');

//Load Profile Model
const Profile = require('../../models/Profile');

//Load User Profile
const User = require('../../models/User');

//@route GET api/Profile
//@desc Get current user profile
//@access Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profiel for this user';
        return res.status(400).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err))
})

//@route POT api/Profile
//@desc Create or Edit user profile
//@access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    //check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    //Get fields
    const profileFields = {};
    if (req.body.handel) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.githubusername) profileFields.githubusername = req.body.githubusername;

    // Skills - Split into array
    if (typeof req.body.skills !== 'undefined') {
      profileFields.skills = req.body.skills.split(',');
    }

    // Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (profile) {
          //Update
          Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          ).then(profile => res.json(profile));
        } else {
          //Create

          //Check if handle exists
          Profile.findOne({ handle: profileField.handle })
            .then(profile => {
              if (profile) {
                errors.handle = 'That handle already exists';
                res.status(400).json(errors);
              }

              // Save Pofile
              new Profile(profileFields).save().then(profile => res.json(profile));
            })
        }
      })
  })

module.exports = router;
