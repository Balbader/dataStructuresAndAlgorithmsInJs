export class CUser {

    constructor( public firstName: string, public lastName:string, private age: number, protected lang: string = "TypeScript") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.lang = lang;
    }

    public getFirstName = (): string => {
        return this.firstName;
    }

    public getLastName = (): string => {
        return this.lastName;
    }

    public getAge = (): number => {
        return this.age;
    }

    public getLang = (): string => {
        return this.lang;
    }

    public printUserInfo = () => {
        console.log(`User ${this.getFirstName()} ${this.getLastName()} is ${this.getAge()} years old and knows ${this.getLang()}.`);
    }
}
