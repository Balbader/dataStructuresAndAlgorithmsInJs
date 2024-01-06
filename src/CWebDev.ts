import { CUser } from "./CUser";

export class CWebDev extends CUser {

    constructor (firstName: string, lastName: string, age: number, public computer: string) {
        super(firstName, lastName, age);
        this.computer = computer;
    }

    public getFirstName = (): string => {
        return this.firstName;
    }

    public getLastName = (): string => {
        return this.lastName;
    }

    public getLang = (): string => {
        return this.lang;
    }

    public getComputer = (): string => {
        return this.computer;
    }

    public printWebDevInfo = () => {
        console.log(`WebDev ${this.getFirstName()} ${this.getLastName()} is ${this.getAge()} years old and knows ${this.getLang()}. She uses a ${this.getComputer()}.`);
    }
}
