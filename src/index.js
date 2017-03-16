import {cookieToggle} from "./js/cookieToggle.js"


// cookieToggle.set('name1', 'value1', { expires: 7 });
// Cookies.set('name', 'value', { expires: 7, path: '' });
// cookieToggle.remove("name1", "value1");

// console.log(cookieToggle.get());
// console.log(cookieToggle.get("name1"));

// cookieToggle.set('name', 'value', { path: '' });
// cookieToggle.remove('name'); // undef
// cookieToggle.remove('name', { path: '' }); // removed!

// console.log(cookieToggle.getJSON()); // => { name: { foo: 'bar' } }
// console.log(cookieToggle.getJSON("name1")); // => { foo: 'bar' }

let lastViewedItems = [];

cookieToggle.set("name1", "value1");
lastViewedItems.push(cookieToggle.getJSON("name1"));
console.log(lastViewedItems);

cookieToggle.set("name2", "value2");
lastViewedItems.push(cookieToggle.getJSON("name2"));
console.log(lastViewedItems);

document.body.innerHTML = lastViewedItems;
// document.body.innerHTML = lastViewedItems.toString().toUpperCase();

// cookieToggle.set(lastViewedItems.toString());
console.log(cookieToggle.getJSON());
// document.body.innerHTML = lastViewedItems[1];
// document.body.innerHTML = lastViewedItems.length;

// document.body.innerHTML = x.name1; // value1
// document.body.innerHTML = x.value1; // undef




