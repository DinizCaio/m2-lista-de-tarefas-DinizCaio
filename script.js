const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(tasksArray) {
  const list = document.querySelector(".tasks__list");
  list.innerText = "";
  for (let i = 0; i < tasksArray.length; i++) {
    const li = createTaskItem(tasksArray[i]);
    list.appendChild(li);
  }
}

function createTaskItem(taskObj) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const button = document.createElement("button");

  li.classList.add("task__item");
  div.classList.add("task-info__container");
  span.classList.add("task-type");
  if (taskObj.type == "Urgente") {
    span.classList.add("span-urgent");
  } else if (taskObj.type == "Importante") {
    span.classList.add("span-important");
  } else if (taskObj.type == "Normal") {
    span.classList.add("span-normal");
  }
  button.classList.add("task__button--remove-task");

  button.addEventListener("click", function (event) {
    let indexDel = tasks.indexOf(taskObj);
    tasks.splice(indexDel, 1);
    renderElements(tasks);
  });

  p.innerText = taskObj.title;

  div.appendChild(span);
  div.appendChild(p);

  li.appendChild(div);
  li.appendChild(button);

  return li;
}

const taskName = document.querySelector("#input_title");
const taskType = document.querySelector(".form__input--priority");
const buttonAdd = document.querySelector(".form__button--add-task");

buttonAdd.addEventListener("click", function (event) {
  event.preventDefault();
  const taskNameValue = taskName.value;
  const taskTypeValue = taskType.value;
  const objTask = {};
  if (taskNameValue == "" || taskTypeValue == "") {
    alert("Tarefa não adicionada!");
  } else {
    objTask.title = taskNameValue;
    objTask.type = taskTypeValue;
    tasks.push(objTask);
    renderElements(tasks);
  }
});
