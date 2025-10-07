import { store } from '../utils/api.js';

export function AddStudentForm(onAdded) {
  const container = document.createElement('div');
  container.className = 'add-student card';

  container.innerHTML = `
    <h3>Add Student</h3>
    <form id="add-student-form">
      <label>Name</label>
      <input name="name" type="text" required />
      <small class="error" data-for="name"></small>

      <label>Student ID</label>
      <input name="studentId" type="text" required />
      <small class="error" data-for="studentId"></small>

      <button type="submit">Add</button>
    </form>
  `;

  const form = container.querySelector('#add-student-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').trim();
    const studentId = (data.get('studentId') || '').trim();

    container.querySelectorAll('.error').forEach(n => n.textContent = '');

    let valid = true;
    if (!name) {
      container.querySelector('[data-for="name"]').textContent = 'Name is required';
      valid = false;
    }
    if (!studentId) {
      container.querySelector('[data-for="studentId"]').textContent = 'Student ID is required';
      valid = false;
    }
    if (!valid) return;

    store.addStudent({ name, studentId });
    form.reset();
    if (typeof onAdded === 'function') onAdded();
  });

  return container;
}
