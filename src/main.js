import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TasksBoardComponent from './view/tasks-board-component.js';
import {render, RenderPosition} from './framework/render.js';



const bodyContainer= document.querySelector('.container');
const formContainer = document.querySelector('.new-task');
const formColumns= document.querySelector('.columns');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new TasksBoardComponent(), formColumns);