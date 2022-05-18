import { Category } from "./types/types.js";
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
        name: "Nakarmić koty",
        done: true,
        category: Category.GENERAL
    },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
const task = ["zrobić nogi", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
addTask({ name: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
// type unknown
let get = (response) => response;
const logFixed = (v) => {
    console.log(v.toFixed());
};
logFixed(2.1);
let value = get(2.3);
if (typeof value === "number") {
    logFixed(value);
}
let newTask; // mozna też zapisać --> let newTask: TaskType;
newTask = {
    name: "nowy task",
    done: true,
    createdAt: new Date(),
};
/*
let newTask: TaskType;

newTask = {
    name: "nowy task",
    done: true,
}

type Category = "work" | "hobby" | "general"; // interface Category = "work" | "hobby" | "general"; NIE ZADZIAŁA bo używamy obiektów do określania interface
type CategoryAndNumber = Category | number;*/
