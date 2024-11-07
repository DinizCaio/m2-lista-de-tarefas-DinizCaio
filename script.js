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

  p.innerText = taskObj.title;

  div.appendChild(span);
  div.appendChild(p);

  li.appendChild(div);
  li.appendChild(button);

  return li;
}
