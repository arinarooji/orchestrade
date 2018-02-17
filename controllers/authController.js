const express = require('express');
const validator = require('validator');
const router = new express.Router();

//  Validate the sign up form
//  
//  @param {object} payload - the HTTP body message
//  @returns {object} The result of validation. Object contains a boolean validation result,
//                    errors tips, and a global message for the whole form.

function validateSignup(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.school !== 'string' || payload.school.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your school name.';
  }

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide a username.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 6) {
    isFormValid = false;
    errors.password = 'Password must have at least 6 characters.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}


function validateLogin(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';
  
    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
      isFormValid = false;
      errors.email = 'Please provide your email address.';
    }
  
    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
      isFormValid = false;
      errors.password = 'Please provide your password.';
    }
  
    if (!isFormValid) {
      message = 'Check the form for errors.';
    }
  
    return {
      success: isFormValid,
      message,
      errors
    };
  }


// router.post('/signup', (req, res) => {
//     const validationResult = validateSignup(req.body);
//     if (!validationResult.success) {
//       return res.status(400).json({
//         success: false,
//         message: validationResult.message,
//         errors: validationResult.errors
//       });
//     }
  
//     return res.status(200).end();
//   });

module.exports = {
    signup: function(req, res) {
        const validationResult = validateSignup(req.body);
        if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }
  
    return res.status(200).end();
    },
    login: function(req, res) {
        const validationResult = validateLogin(req.body);
        if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }
  
    return res.status(200).end();
    }
};