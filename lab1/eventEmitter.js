import { EventEmitter } from "node:events";

const login = (name) => {
  console.log(`${name} has logged in.`);
};

const start = () => {
  console.log("Starting the application...");
};

const working = (name) => {
  console.log(`${name}, add items to cart`);
};

const checkout = (name) => {
  console.log(`${name}, proceed to checkout`);
};

const task = new EventEmitter();
task.once("greeting", start);
task.on("greeting", login);
task.on("greeting", working);
task.on("greeting", checkout);

task.once("exit", (name) => {
  console.log(`${name} is shutting down the system...`);
});

task.emit("greeting", "Mayank");
task.emit("greeting", "Ajyendra");
task.off("greeting", working);
task.emit("greeting", "Rohit");
task.emit("exit", "Manager");
