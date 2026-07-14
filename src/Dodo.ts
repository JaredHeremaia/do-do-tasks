abstract class Dodo {
  constructor(public title: string) {} 

  abstract created_at: Date
  abstract due_date: Date; 
  abstract description: string;
  abstract completed: boolean;
  
  abstract output(): string;
}

export class Task extends Dodo {
    output(): string {
        return(this.title + " " + this.due_date.toDateString() + " " + this.description + " - " + this.completed);
    }

    created_at: Date = new Date;
    due_date: Date = new Date(); 
    description: string = "";
    completed: boolean = false;
}