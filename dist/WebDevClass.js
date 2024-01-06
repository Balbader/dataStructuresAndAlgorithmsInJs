"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebDevClass = void 0;
const UserClass_1 = require("./UserClass");
class WebDevClass extends UserClass_1.UserClass {
    constructor(firstName, lastName, age, computer) {
        super(firstName, lastName, age);
        this.computer = computer;
        this.getFirstName = () => {
            return this.firstName;
        };
        this.getLastName = () => {
            return this.lastName;
        };
        this.getLang = () => {
            return this.lang;
        };
        this.getComputer = () => {
            return this.computer;
        };
        this.printWebDevInfo = () => {
            console.log(`WebDev ${this.getFirstName()} ${this.getLastName()} is ${this.getAge()} years old and knows ${this.getLang()}. She uses a ${this.getComputer()}.`);
        };
        this.computer = computer;
    }
}
exports.WebDevClass = WebDevClass;
