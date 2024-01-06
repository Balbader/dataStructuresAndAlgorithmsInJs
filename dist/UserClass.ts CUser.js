"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClass = void 0;
class UserClass {
    constructor(firstName, lastName, age, lang = "TypeScript") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.lang = lang;
        this.getFirstName = () => {
            return this.firstName;
        };
        this.getLastName = () => {
            return this.lastName;
        };
        this.getAge = () => {
            return this.age;
        };
        this.getLang = () => {
            return this.lang;
        };
        this.printUserInfo = () => {
            console.log(`User ${this.getFirstName()} ${this.getLastName()} is ${this.getAge()} years old and knows ${this.getLang()}.`);
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.lang = lang;
    }
}
exports.UserClass = UserClass;
