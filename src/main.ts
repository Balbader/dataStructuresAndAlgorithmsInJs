import { CUser } from "./CUser";
import { CWebDev } from "./CWebDev";

const Basil = new CUser("Basil", "Alba", 40);
const Mimi = new CWebDev("Mimi", "Anderson", 36, "System76");

Basil.printUserInfo();
Mimi.printWebDevInfo()
