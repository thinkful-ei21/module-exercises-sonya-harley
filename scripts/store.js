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
  const findAndToggleChecked = function(id) {
    const toggleItem = this.findById(id);
    toggleItem.checked = !toggleItem.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch(e) {
      console.log(`Cannot update name:${e.message}`);
    }
  };

  return {
    items, hideCheckedItems, searchTerm, findById, addItem, findAndToggleChecked,
    findAndUpdateName
  };

}() );
