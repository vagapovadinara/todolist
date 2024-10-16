
import ClearButtonComponent from '../view/task-clear-button.js';
import TaskListComponent from '../view/tasks-list-component.js';
import TaskComponent from '../view/task-component.js';
import {render} from '../framework/render.js';
import {Status} from "../const.js";

const numberOfStatuses = 4;
const numberOfTasks = 4;

export default class TasksBoardPresenter {
 taskBoardContainer;
 taskListComponent;
 tasksModel;

 constructor({taskBoardContainer, tasksModel}) {
   this.taskBoardContainer = taskBoardContainer;
   this.tasksModel = tasksModel;
 }


 init() {
    const tasks = [...this.tasksModel.getTasks()];
    
    for (let key in Status) {
      const taskListComponent = new TaskListComponent({
        status: Status[key],
      });
      const tasksInCurrentStatus = tasks.filter(
        (task) => task.status === Status[key]
      );

      render (taskListComponent, this.taskBoardContainer);

      for (let key in tasksInCurrentStatus) {
        const taskComponent = new TaskComponent({
          task: tasksInCurrentStatus[key],
        });
        console.log (taskComponent);
        render(taskComponent, taskListComponent.getElement());
      }

      
      if (Status[key] === 'trash'){
        this.makeClearButton(taskListComponent.getElement());
      }
    }
    
    
  }

  makeClearButton(trashContainer) {
    
    render (new ClearButtonComponent(), trashContainer);
  }
}
