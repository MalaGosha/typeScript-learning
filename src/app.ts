import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import {render as renderCategories} from "./helpers/render-categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
    Category.GENERAL,
    Category.WORK,
    Category.HOBBY,
    Category.GYM,
    Category.SOCIAL,
];

const tasks: Task[] = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: Category.GENERAL
    },
    {
        name: "Pójść na siłkę",
        done: true,
        category: Category.GYM
    },
    {
        name:"Nakarmić koty",
        done: true,
        category: Category.GENERAL
    },
];

const addTask = (task: Task) => {
    tasks.push(task);
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}

addButtonElement.addEventListener("click", (e: Event) => {
    e.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});

type TaskAsTuple = [string, Category, boolean]

const task: [string, Category, boolean] = ["zrobić nogi", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];


addTask({name:taskName, category: taskCategory,  done: taskDoneStatus});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);

let get =(response: unknown) => response;

const logFixed = (v: number) => {
    console.log(v.toFixed());
}

logFixed(2.1);

let value = get(2.3);
if (typeof value === "number"){
    logFixed(value);
}
