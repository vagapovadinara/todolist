import {createElement} from '../framework/render.js';


function createTasksBoardComponentTemplate() {
    return (
        `<div class="columns">
            <div class="column backlog">
                <h4>Бэклог</h4>
                <div class="task">Выучить JS</div>
                <div class="task">Выучить React</div>
                <div class="task">Сделать домашку</div>
            </div>
            <div class="column in-progress">
                <h4>В процессе</h4>
                <div class="task">Выпить смузи</div>
                <div class="task">Попить воды</div>
            </div>
            <div class="column done">
                <h4>Готово</h4>
                <div class="task">Позвонить маме</div>
                <div class="task">Погладить кота</div>
            </div>
            <div class="column trash">
                <h4>Корзина</h4>
                <div class="task">Сходить погулять</div>
                <div class="task">Прочитать Войну и Мир</div>
                <button class="clear-button">x Очистить</button>
            </div>
        </div>`
      );
}


export default class TasksBoardComponent {
  getTemplate() {
    return createTasksBoardComponentTemplate();
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
