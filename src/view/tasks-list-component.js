import { StatusLabel } from '../const.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskListComponentTemplate(status) {
  return `<div class="column ${status}">
            <h4>${StatusLabel[status]}</h4>
          </div>`;  
}

export default class TaskListComponent extends AbstractComponent{
  status;

  constructor({status}) {
    super();
    this.status = status;
  }

  get template() {
    return createTaskListComponentTemplate(this.status);
  }
}