import React, { Component } from 'react'
import _ from '../../node_modules/lodash'

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: props.task || {}
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let result = null

    if (!_.isEqual(nextProps.task, prevState.task)) {
      result = {
        task: nextProps.task
      }
    }

    return result
  }

  render() {
    const {onCloseForm, handleInput, addTask, isEditTask} = _.clone(this.props)

    let {task} = _.clone(this.state)

    let titleForm = isEditTask ? 'Chỉnh sửa công việc' : 'Thêm công việc'
    let nameEditButton = isEditTask ? 'Chỉnh sửa' : 'Thêm'

    return (
      <div className='panel panel-warning'>
        <div className='panel-heading'>
          <h3 className='panel-title'>
            {titleForm}
            <span
              className='fa fa-times-circle text-right'
              onClick={onCloseForm}
            >
            </span>
          </h3>
        </div>
        <div className='panel-body'>
          <form>
            <div className='form-group'>
              <label>Tên:</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => handleInput(e, 'name')}
                value={task ? task.name : ''}
              />
            </div>
            <label>Trạng Thái:</label>
            <select
              className='form-control fa-i-cursor'
              required='required'
              onChange={(e) => handleInput(e, 'status')}
            >
              <option value={'1'}>Kích Hoạt</option>
              <option value={'0'}>Ẩn</option>
            </select>
            <br/>
            <div className='text-center'>
              <button
                type='submit'
                className='btn btn-warning margin-right-5'
                onClick={(e) => addTask(e)}
                // value={task ? task.status : ''}
              >
                {nameEditButton}
              </button>
              <button
                type='submit'
                className='btn btn-danger margin-right-5'
                onClick={onCloseForm}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TaskForm
