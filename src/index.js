const store = require("./js/vendor/store.everything.min.js");

const customStorage = {
  get: function (key) {
    return store.get(key);
  },

  set: function (key, value) {
    return store.set(key, { name: value });
  },

  showAll: function (key, value) {
    store.each(function(key, value) {
      console.log(key, '==', value);
    });
  },

  remove: function (key) {
    store.remove(key);
  },

  clearAll: function () {
    store.clearAll();
  }
};

customStorage.set("user1", {name: "markus"});
console.dir(customStorage.get("user1"));

document.body.innerHTML = customStorage.get("user1");
