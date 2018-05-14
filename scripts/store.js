'use strict';

/* global Item */
// eslint-disable-next-line no-unused-vars
const store = (function () {
  const items = [];
  const hideCheckedItems = false;
  const searchTerm = '';
  const findById = function(id) {
    return this.items.find(element => element.id === id);
  };
  const addItem = function(name) {
    try {
      Item.validateName(name);
      const newItem = Item.create(name);
      this.items.push(newItem);
    }
    catch(e) {
      console.log(`Cannot add item:${e.message}`);
    }
  };

  return {
    items, hideCheckedItems, searchTerm, findById, addItem
  };

}() );
