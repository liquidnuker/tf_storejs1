import {customStorage} from "./js/customStorage.js";

// customStorage.set("user1", "markus");
customStorage.set("user2", {
  name: "markus2",
  photo: "photo002.jpg"
});

// console.log(customStorage.get("user2").photo === "photo002.jpg");
// console.log(customStorage.get("user2"));
// console.dir(customStorage.get("user2"));

customStorage.showAll();

// customStorage.remove("user1");
// customStorage.clearAll();
// console.dir(customStorage.get("user1"));

document.body.innerHTML = JSON.stringify(customStorage.get("user2"));
// document.body.innerHTML = customStorage.showAll());