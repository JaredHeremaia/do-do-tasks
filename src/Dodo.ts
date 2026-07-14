abstract class Dodo {
  constructor(public title: string) {} 

  abstract due_date: Date; 
  abstract description: string;
  
  abstract output(): void;
}

export class Task extends Dodo {
    output(): void {
        console.log(this.title + " " + this.due_date.toDateString() + " " + this.description);
    }

    due_date: Date = new Date(); 
    description: string = "";
}