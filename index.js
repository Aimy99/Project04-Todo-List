#! usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to the Todo List Application");
let todoList = [];
let continueList = true;
while (continueList) {
    const list = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "What would you like to add in your Todo List? ",
        },
        {
            name: "more",
            type: "confirm",
            message: "Do you wish to add more to your list? ",
            default: true,
        },
        {
            name: "display",
            type: "confirm",
            message: "Would you like to see your list? ",
            default: false,
        },
    ]);
    todoList.push(list.task);
    continueList = list.more;
    if (list.display === true) {
        console.log("Your Todo List has the following: ");
        todoList.forEach((task) => {
            console.log(`=>  ${task}`);
        });
    }
}
;
