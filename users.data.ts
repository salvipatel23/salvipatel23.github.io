"use strict";


import { promises } from 'fs';
const fsPromises = promises;

export async function getData() {
    return await fsPromises.readFile("./data/users.json", "utf-8")};