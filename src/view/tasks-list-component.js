import { createElement } from '../framework/render.js';
import { StatusLabel } from '../const.js';

function createTaskListComponentTemplate(status) {
  return `<div class="column ${status}">
            <h4>${StatusLabel[status]}</h4>
          </div>`;  
}

export default class TaskListComponent {
  status;

  constructor({status}) {
    this.status = status;
  }

  getTemplate() {
    return createTaskListComponentTemplate(this.status);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }

}