const store = require("./js/vendor/store.everything.min.js");

// set
store.set('user1', { name:'Marcus' });

// get
console.log(store.get('user1'));
