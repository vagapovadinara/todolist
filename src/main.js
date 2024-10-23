import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import {render, RenderPosition} from './framework/render.js';
import TasksModel from './model/tasks-model.js';

const bodyContainer= document.querySelector('.container');
const formContainer = document.querySelector('.new-task');
const taskBoardContainer= document.querySelector('.columns');


const tasksModel = new TasksModel();
const headerComponent = new HeaderComponent();
const tasksBoardPresenter = new TasksBoardPresenter({
    taskBoardContainer: taskBoardContainer,
    tasksModel: tasksModel,
});

const formAddTaskComponent = new FormAddTaskComponent({
    onClick: handleNewTaskButtonClick,
});

render(headerComponent, bodyContainer, RenderPosition.AFTERBEGIN);
render(formAddTaskComponent, formContainer);

tasksBoardPresenter.init();

function handleNewTaskButtonClick() {
    tasksBoardPresenter.createTask();
  }