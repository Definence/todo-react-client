import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';

import Navbar from '../layouts/navbar';
import TasksList from './tasks_list';
import TaskForm from './task_form';


const Tasks_Index = () => {
  return (
    <div>

      <Navbar />

      <div className="container">
        <div className="row">

          <div className="col-sm-8">
            <TasksList />
          </div>

          <div className="col-sm-4">
            <TaskForm />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Tasks_Index;
