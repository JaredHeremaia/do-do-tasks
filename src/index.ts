import { Task } from './Task'

const task = new Task("New Dodo Task") 

task.description = "This is a new dodo task"
task.completed = true;
console.log(task.output()) 

const task2 = new Task("New Dodo Task 2") 

task2.description = "This is a new dodo task 2"
task2.due_date = new Date(2026, 6, 10)
console.log(task2.output()) 

const task3 = new Task("New Dodo Task 3") 

task3.description = "This is a new dodo task 3"
task3.due_date = new Date(2026, 6, 13)
console.log(task3.output()) 

