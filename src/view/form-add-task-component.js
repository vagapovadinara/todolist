import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<div class="new-task">
            <h3>Новая задача</h3>
            <input type="text" placeholder="Название задачи...">
            <button>+Добавить</button>
        </div>`
      );
}


export default class FormAddTaskComponent extends AbstractComponent {
  constructor() {
    super();
  }

  get template() {
    return createFormAddTaskComponentTemplate();
  }
}