const store = require("./js/vendor/store.everything.min.js");

const customStorage = {
  get: function (key) {
    return store.get(key);
  },

  set: function (key, value) {
    return store.set(key, { name: value });
  },

  showAll: function (key, value) {
    return store.each(function(key, value) {
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

customStorage.set("user1", {name: "markus"});
// console.dir(customStorage.get("user1"));

// customStorage.remove("user1");
// customStorage.clearAll();
console.dir(customStorage.get("user1"));


