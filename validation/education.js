const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (validator.isEmpty(data.school)) {
    errors.school = 'School field is required';
  }
  
  if (validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Field of Study field is required';
  }
  
  if (validator.isEmpty(data.from)) {
    errors.from = 'From Date field is required';
  }
  
  if (validator.isEmpty(data.from)) {
    errors.from = 'From Date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
