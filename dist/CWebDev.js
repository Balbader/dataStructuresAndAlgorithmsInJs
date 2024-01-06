"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWebDev = void 0;
const CUser_1 = require("./CUser");
class CWebDev extends CUser_1.CUser {
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
exports.CWebDev = CWebDev;
