import {HasFormatter} from "../interfaces/hasFormatter"

export class Invoice implements HasFormatter{ // ensuring that the class is following the structure of having the format method
    // public client:string; //classes has public modifiers by default it allows allows us to change and read values
    // private details:string; // cant be access outside of the class
    // readonly amount:number; // allows only reading both in and otside of the class but no changes can be made

    constructor(
        readonly client: string, //this works as long as you add the modifiers in them
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}` //returns a string
    }
}