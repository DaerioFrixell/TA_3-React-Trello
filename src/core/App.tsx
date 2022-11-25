import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Projects } from '../view/pages/projects/Projects';
import { TaskBoard } from '../view/pages/taskBoard/TaskBoard';
// import { TodoList } from '../view/userList/TodoList';
// import { UserList } from '../view/userList/UserList';


import './app.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/tasks" element={<TaskBoard />} />
        <Route path="*" element={<Projects />} />

        {/* <UserList /> */}
        {/* <TodoList /> */}
      </Routes>
    </>
  );
}

export default App;
