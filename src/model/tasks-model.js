import { tasks } from '../mock/tasks.js';




export default class TasksModel {
  #boardtasks;

  constructor() {
    this.#boardtasks = tasks;
  }

  getTasks() {
    return this.#boardtasks;
  }
}
