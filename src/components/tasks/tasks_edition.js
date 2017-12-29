import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTask } from '../../actions/tasks';

import Menu from '../layouts/menu';
import { editTask } from '../../actions/tasks';


class Tasks_Edition extends Component {

  constructor() {
    super();
    this.state = {
      task: {
        title: '',
        description: '',
        priority: '',
        due_date: new Date(),
      }
    };
  }

  componentDidMount () {
    let id = this.props.params.id;
    this.props.onGetTask(id);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({task: nextProps.tasks_edition});
  }

  handleChange(field, element) {
    this.state.task[field] = element.target.value;
    this.setState({ task: this.state.task });
  }

  handleSubmit() {
    this.props.onEditTask(this.state);
  }

  render() {
    const {task} = this.state;
    return (
      <div>
        <Menu/>

        <div className='container'>
          <div className='col-sm-3' />

          <div className='col-sm-6'>
            <h2 className='text-center'>Task update</h2>

              <form className='form-group' onSubmit={ this.handleSubmit.bind(this) } >
                <label>Title:</label>
                <input className='form-control' type="text" value={task.title} name='title' onChange={this.handleChange.bind(this, 'title')} required minLength="5" />

                <label>Description:</label>
                <input className='form-control' type="text" value={task.description} name='description' onChange={this.handleChange.bind(this, 'description')} required />

                <label>Priority:</label>
                <input className='form-control' type="number" value={task.priority} name='priority' onChange={this.handleChange.bind(this, 'priority')} required />

                <label>Date:</label>
                <input className='form-control' type="date" value={task.due_date} name='due_date' onChange={this.handleChange.bind(this, 'due_date')} required />

                <br/>

                <button type="submit" className="btn btn-primary form-group">Save</button>
              </form>

          </div>
        </div>

      </div>
    );
  }
}

export default connect(
  state => ({
    tasks_edition: state.tasks.edit
  }),

  dispatch => ({
    onGetTask: (id) => {
      dispatch(getTask(id));
    },

    onEditTask: (id) => {
      console.log('Connecting onEditTask: success');
      dispatch(editTask(id));
    }
  })
)(Tasks_Edition);