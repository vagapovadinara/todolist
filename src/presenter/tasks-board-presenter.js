
import DragAndDropTaskComponent from "../view/drag-and-drop-task-component.js";
import ClearButtonComponent from '../view/task-clear-button.js';
import TaskListComponent from '../view/tasks-list-component.js';
import TaskComponent from '../view/task-component.js';
import {render} from '../framework/render.js';
import {Status} from "../const.js";

export default class TasksBoardPresenter {
 #taskBoardContainer;
 #tasksModel;

 constructor({taskBoardContainer, tasksModel}) {
   this.#taskBoardContainer = taskBoardContainer;
   this.#tasksModel = tasksModel;
 }


 init() {
    const tasks = [...this.#tasksModel.getTasks()];
    
    Object.values(Status).forEach((status) => {
      const taskListComponent = new TaskListComponent({ status: status });
      const tasksInCurrentStatus = tasks.filter(
        (task) => task.status === status
      );

      render(taskListComponent, this.#taskBoardContainer);

      if (tasksInCurrentStatus.length === 0) {
        render(new DragAndDropTaskComponent(), taskListComponent.element);
      } else {
        Object.values(tasksInCurrentStatus).forEach((taskInCurrentStatus) => {
          this.#renderTask(taskInCurrentStatus, taskListComponent.element);
        });
      }
    });

    this.makeClearButton();
  }

  #renderTask(task, container) {
    const taskComponent = new TaskComponent({ task });

    render(taskComponent, container);
  }

  makeClearButton() {
    const trashContainer = document.querySelector(`.${Status.TRASH}`);
    render (new ClearButtonComponent(), trashContainer);
  }
}
