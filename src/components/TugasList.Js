import { useState, useEffect } from 'react';
import { getTasks } from '../services/googleSheets';

function TugasList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h2>Daftar Tugas</h2>
      {tasks.map(task => (
        <div key={task[0]}>
          <h3>{task[1]}</h3>
          <p>{task[2]}</p>
          <button>Kerjakan</button>
        </div>
      ))}
    </div>
  );
}
