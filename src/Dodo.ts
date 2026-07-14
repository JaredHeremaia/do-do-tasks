export abstract class Dodo {
  constructor(public title: string) {} 

  abstract created_at: Date
  abstract due_date: Date; 
  abstract description?: string;
  abstract completed: boolean;
  
  abstract output(): string;
}