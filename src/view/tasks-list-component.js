import { StatusLabel } from '../consts.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskListComponentTemplate(status) {
  return `<div class="column ${status}">
            <h4>${StatusLabel[status]}</h4>
          </div>`;  
}

export default class TaskListComponent extends AbstractComponent{
  status;

  constructor({ status, onTaskDrop }) {
    super();
    this.status = status;
    this.#setDropHandler(onTaskDrop);
  }

  get template() {
    return createTaskListComponentTemplate(this.status);
  }
  #setDropHandler(onTaskDrop) {
    const container = this.element;
    let draggedOverTask = null;

    container.addEventListener("dragover", (event) => {
      event.preventDefault();

      draggedOverTask = event.target.closest(".task-element");
    });

    container.addEventListener("drop", (event) => {
      event.preventDefault();

      const taskId = event.dataTransfer.getData("text/plain");
      const position = draggedOverTask ? draggedOverTask.dataset.taskId : null;

      onTaskDrop(taskId, this.status, position);
    });
  }
}