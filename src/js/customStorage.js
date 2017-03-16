const store = require("./vendor/store.everything.min.js");

const customStorage = {
  get: function (key) {
    return store.get(key);
  },

  set: function (key, value) {
    return store.set(key, value);
  },

  showAll: function () {
    store.each(function(key, value) {
      console.log(key, '==', value);
    });
  },

  remove: function (key) {
    return store.remove(key);
  },

  clearAll: function () {
    return store.clearAll();
  }
};

export {customStorage}