import React, { Component } from 'react'
import _ from '../../node_modules/lodash'

import TaskItem from './TaskItem'

class TaskList extends Component {
  render() {
    const {tasks} = _.cloneDeep(this.props)
    const {deleteTask, toggleEditForm, filter, onFilter, changeStatus} = _.clone(this.props)

    let elmTask = _.map(tasks, (task, index) => {
      return <TaskItem
        key={task.id}
        index={index}
        task={task}
        deleteTask={()=>deleteTask(task.id)}
        toggleEditForm={()=>toggleEditForm(task.id)}
        changeStatus={() => changeStatus(task.id)}
      />
    })

    return (
      <table className='table table-bordered table-hover mr-15'>
        <thead>
          <tr>
            <th className='text-center'>STT</th>
            <th className='text-center'>Tên</th>
            <th className='text-center'>Trạng Thái</th>
            <th className='text-center'>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type='text'
                className='form-control'
                name='filterName'
                onChange={(e)=>onFilter(e,'filterName')}
                defaultValue={ filter.filterName}

              />
            </td>
            <td>
              <select
                className='form-control'
                name='filterStatus'
                defaultValue={filter.filterStatus}
                onChange={(e)=>onFilter(e, 'filterStatus')}
              >
                <option value='-1'>Tất Cả</option>
                <option value='0'>Ẩn</option>
                <option value='1'>Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elmTask}
        </tbody>
      </table>
    )
  }
}

export default TaskList
