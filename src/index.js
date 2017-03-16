const store = require("./js/vendor/store.everything.min.js");

// set
store.set('user1', { name:'Marcus' });

// get
// console.log(store.get('user1'));

// remove 
// store.remove("user1");
// console.log(store.get("user1"));

store.set('user2', { name:'Marcus2' });
// console.log(store.get('user1'));

// store.each(function(value, key) {
//     console.log(key, '==', value)
// });

// Clear all keys
// store.clearAll();

var x = store.get("user2");
console.log(x);

var y = JSON.stringify(x);
console.log(y);

document.body.innerHTML = y;