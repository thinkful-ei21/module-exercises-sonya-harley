'use strict';

/* global cuid*/
// eslint-disable-next-line no-unused-vars
const Item = (function () {
  const validateName = function (name) {
    if (!name || name.length === 0) throw new TypeError('Name does not exist');
  };
  const create = function (name) {
    return {
      id: cuid(),
      name,
      checked: false
    };
  };
  return {
    validateName,
    create
  };
}() );
