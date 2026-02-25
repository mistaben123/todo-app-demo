const taskInput = document.getElementById('taskInput');
const dueDate = document.getElementById('dueDate');
const dueTime = document.getElementById('dueTime');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text) addTask(text);
});

taskInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const text = taskInput.value.trim();
    if (text) addTask(text);
  }
});

function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatTime(timeString) {
  if (!timeString) return '';
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

function formatCreatedDateTime(now) {
  const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  return `${date} at ${time}`;
}

function addTask(text) {
  const li = document.createElement('li');
  li.className = 'task';

  const left = document.createElement('div');
  left.className = 'task-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  const content = document.createElement('div');
  content.className = 'task-content';

  const span = document.createElement('div');
  span.className = 'task-text';
  span.textContent = text;

  const metaDiv = document.createElement('div');
  metaDiv.className = 'task-meta';

  const now = new Date();
  const createdDateTime = formatCreatedDateTime(now);

  let metaText = `Created: <strong>${createdDateTime}</strong>`;
  if (dueDate.value) {
    const dueDateFormatted = formatDate(dueDate.value);
    const dueTimeFormatted = dueTime.value ? formatTime(dueTime.value) : '';
    metaText += ` | Due: <strong>${dueDateFormatted}`;
    if (dueTimeFormatted) metaText += ` at ${dueTimeFormatted}`;
    metaText += '</strong>';
  }

  metaDiv.innerHTML = metaText;

  content.appendChild(span);
  content.appendChild(metaDiv);

  left.appendChild(checkbox);
  left.appendChild(content);

  const buttons = document.createElement('div');
  buttons.className = 'task-buttons';

  const del = document.createElement('button');
  del.className = 'delete-btn';
  del.textContent = 'Delete';

  buttons.appendChild(del);

  li.appendChild(left);
  li.appendChild(buttons);

  taskList.appendChild(li);

  taskInput.value = '';
  dueDate.value = '';
  dueTime.value = '';
  taskInput.focus();

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) li.classList.add('completed');
    else li.classList.remove('completed');
  });

  del.addEventListener('click', () => {
    li.remove();
    checkEmpty();
  });

  checkEmpty();
}

function checkEmpty() {
  if (!taskList.children.length) {
    taskList.innerHTML = '<li class="empty">No tasks yet. Add one above.</li>';
  } else {
    const first = taskList.children[0];
    if (first && first.classList && first.classList.contains('empty')) {
      if (taskList.children.length === 1) return;
      first.remove();
    }
  }
}

checkEmpty();
