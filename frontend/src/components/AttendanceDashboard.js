import { AddStudentForm } from './AddStudentForm.js';
import { store } from '../utils/api.js';

export function AttendanceDashboard() {
  const container = document.createElement('section');
  container.className = 'card';

  const title = document.createElement('h2');
  title.textContent = 'Attendance Dashboard';
  container.appendChild(title);

  const addForm = AddStudentForm(renderList);
  container.appendChild(addForm);

  const listWrap = document.createElement('div');
  listWrap.className = 'student-list card';
  container.appendChild(listWrap);

  function renderList() {
    const students = store.listStudents();
    listWrap.innerHTML = '';
    const h3 = document.createElement('h3');
    h3.textContent = `Students (${students.length})`;
    listWrap.appendChild(h3);

    if (students.length === 0) {
      const p = document.createElement('p');
      p.textContent = 'No students yet. Add one using the form above.';
      listWrap.appendChild(p);
      return;
    }

    const ul = document.createElement('ul');
    ul.className = 'students';
    students.forEach(s => {
      const li = document.createElement('li');
      li.textContent = `${s.name} — ${s.studentId}`;
      const btn = document.createElement('button');
      btn.textContent = 'Remove';
      btn.style.marginLeft = '8px';
      btn.addEventListener('click', () => {
        store.removeStudent(s.id);
        renderList();
      });
      li.appendChild(btn);
      ul.appendChild(li);
    });
    listWrap.appendChild(ul);
  }

  renderList();

  return container;
}
