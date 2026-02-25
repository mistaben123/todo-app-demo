const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text) addTask(text);
});
































































checkEmpty();}  }    }      first.remove();      if (taskList.children.length === 1) return;    if (first && first.classList && first.classList.contains('empty')) {    const first = taskList.children[0];  } else {    taskList.innerHTML = '<li class="empty">No tasks yet. Add one above.</li>';  if (!taskList.children.length) {function checkEmpty() {}  checkEmpty();  });    checkEmpty();    li.remove();  del.addEventListener('click', () => {  });    else li.classList.remove('completed');    if (checkbox.checked) li.classList.add('completed');  checkbox.addEventListener('change', () => {  taskInput.focus();  taskInput.value = '';  taskList.appendChild(li);  li.appendChild(del);  li.appendChild(left);  del.textContent = 'Delete';  del.className = 'delete-btn';  const del = document.createElement('button');  left.appendChild(span);  left.appendChild(checkbox);  span.textContent = text;  span.className = 'task-text';  const span = document.createElement('span');  checkbox.className = 'checkbox';  checkbox.type = 'checkbox';  const checkbox = document.createElement('input');  left.className = 'task-left';  const left = document.createElement('div');  li.className = 'task';  const li = document.createElement('li');function addTask(text) {});  }    if (text) addTask(text);    const text = taskInput.value.trim();  if (e.key === 'Enter') {ntaskInput.addEventListener('keyup', (e) => {