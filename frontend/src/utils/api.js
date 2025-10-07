// Attendance storage helpers (localStorage-backed) for prototyping

const STUDENTS_KEY = 'attendance_demo_students';
const RECORDS_KEY = 'attendance_demo_records';

function read(key) {
  const raw = localStorage.getItem(key) || '[]';
  try { return JSON.parse(raw); } catch (e) { return []; }
}

function write(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export const store = {
  // Students
  listStudents() {
    return read(STUDENTS_KEY);
  },
  addStudent({ name, studentId }) {
    const students = read(STUDENTS_KEY);
    const id = Date.now();
    students.push({ id, name, studentId });
    write(STUDENTS_KEY, students);
    return { success: true };
  },
  removeStudent(id) {
    let students = read(STUDENTS_KEY);
    students = students.filter(s => s.id !== id);
    write(STUDENTS_KEY, students);
    return { success: true };
  },

  // Attendance records (by date)
  listRecords() {
    return read(RECORDS_KEY);
  },
  setRecord(dateISO, records) {
    const all = read(RECORDS_KEY);
    const existingIndex = all.findIndex(r => r.date === dateISO);
    if (existingIndex >= 0) {
      all[existingIndex].records = records;
    } else {
      all.push({ date: dateISO, records });
    }
    write(RECORDS_KEY, all);
    return { success: true };
  },
  getRecordByDate(dateISO) {
    const all = read(RECORDS_KEY);
    return all.find(r => r.date === dateISO) || { date: dateISO, records: [] };
  }
};
