import { Category, Task } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.HOBBY,
    Category.GYM,
    Category.SOCIAL,
];
const tasks = [
    new Task("Wyrzucić śmieci", false, Category.HOBBY),
    new Task("Zrobić zakupy", true, Category.WORK),
    new Task("Umyć okna", true),
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!!!");
    renderTasks(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
// classes
const taskClassInstance = new Task("Zadanie z constructora", true, Category.GYM);
console.log(taskClassInstance.name);
/*
TYPE TUPLE
type TaskAsTuple = [string, Category, boolean];
const task: TaskAsTuple = ["zrobić nogi", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];*/
/*

// type unknown
let get =(response: unknown) => response;

const logFixed = (v: number) => {
    console.log(v.toFixed());
}

logFixed(2.1);

let value = get(2.3);
if (typeof value === "number"){
    logFixed(value);
}



// interface vs type alias
type TaskType = {
    name: string;
    done: boolean;
    category?: Category;
}

interface TaskInterface {
    name: string;
    done: boolean;
    category?: Category;
}

interface TaskInterface {
    createdAt: Date;
}

let newTask: TaskInterface; // mozna też zapisać --> let newTask: TaskType;

newTask = {
    name: "nowy task",
    done: true,
    createdAt: new Date(),
}
*/
/*
let newTask: TaskType;

newTask = {
    name: "nowy task",
    done: true,
}

type Category = "work" | "hobby" | "general"; // interface Category = "work" | "hobby" | "general"; NIE ZADZIAŁA bo używamy obiektów do określania interface
type CategoryAndNumber = Category | number;*/
