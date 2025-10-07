import { Header } from './components/Header.js';
import { AttendanceDashboard } from './components/AttendanceDashboard.js';

export function initApp(root) {
  root.innerHTML = '';
  root.appendChild(Header());

  const content = document.createElement('main');
  content.className = 'content';
  root.appendChild(content);

  function render() {
    content.innerHTML = '';
    content.appendChild(AttendanceDashboard());
  }

  render();
}
