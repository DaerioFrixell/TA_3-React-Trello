import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Projects } from '../view/pages/projects/Projects';
import { TaskBoard } from '../view/components/taskBoard/TaskBoard';
import './app.scss';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Routes>
          <Route path="/project" element={<TaskBoard />} />
          <Route path="*" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
