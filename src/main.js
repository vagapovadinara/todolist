import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import {render, RenderPosition} from './framework/render.js';
import TasksModel from './model/tasks-model.js';
import TasksApiService from "./tasks-api-service.js";

const END_POINT = "https://67360d455995834c8a953779.mockapi.io/tasks";
const bodyContainer= document.querySelector('.container');
const formContainer = document.querySelector('.new-task');
const taskBoardContainer= document.querySelector('.columns');


const tasksApiService = new TasksApiService(END_POINT);
const tasksModel = new TasksModel({
  tasksApiService,
});
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