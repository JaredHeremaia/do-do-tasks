import { Task } from './Task'

describe('Task class', () => {
  it('should return the output', () => {
    const task = new Task("New task Task")

    let date = new Date();
    task.due_date = date;

    let desc = "This is a description";
    task.description = desc; 

    expect(task.output()).toBe("New task Task " + date.toDateString() + " " + desc + " - " + false)
  })

  it('should return the due_date', () => {
    const task = new Task("New Task");
    let date = new Date();
    task.due_date = date;

    expect(task.due_date).toBe(date)
  })

 it('should return the description', () => {
    const task = new Task("New Task");

    let desc = "This is a description";
    task.description = desc;

    expect(task.description).toBe(desc)
  }) 
})