"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    // public client:string; //classes has public modifiers by default it allows allows us to change and read values
    // private details:string; // cant be access outside of the class
    // readonly amount:number; // allows only reading both in and otside of the class but no changes can be made
    constructor(client, //this works as long as you add the modifiers in them
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`; //returns a string
    }
}
exports.Invoice = Invoice;
