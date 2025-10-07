export function Header() {
  const header = document.createElement('header');
  header.className = 'app-header';
  header.innerHTML = `
    <div class="container">
      <h1>Student Attendance Tracker</h1>
    </div>
  `;
  return header;
}
