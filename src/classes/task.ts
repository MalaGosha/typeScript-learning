import {Category} from "../types/types.js";

interface Logger {
    logCreationDate: (addtion: string) => void;
}

export class TaskClass implements Logger {
    public name: string;
    public done: boolean;
    public category?: Category;
    private createdAt: Date;

    constructor(name: string, done: boolean, category?: Category) { // odpala sie zawsze gdy tworzymy nową instancję dla danej klasy
        this.name = name; // this to instancja obiektu który dana klasy tworzy
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    /*LUB dopsiujemy domyślnie jakąś wybraną category
    constructor(name: string, done: boolean, category: Category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
    }*/

    public logCreationDate (extra: string) {
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
    }
}

// const task = new TaskClass(); // tworzenie instancję klasy i przypisanie jej do stałej task


