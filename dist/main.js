"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CUser_1 = require("./CUser");
const CWebDev_1 = require("./CWebDev");
const Basil = new CUser_1.CUser("Basil", "Alba", 40);
const Mimi = new CWebDev_1.CWebDev("Mimi", "Anderson", 36, "System76");
Basil.printUserInfo();
Mimi.printWebDevInfo();
