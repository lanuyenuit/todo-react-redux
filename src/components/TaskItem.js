import React, { Component } from 'react'
import _ from '../../node_modules/lodash'

class TaskItem extends Component {
  render() {
    let {task, index, deleteTask, toggleEditForm, changeStatus} = _.clone(this.props)

    let statusStyle= task.status === "1" ?
        'label label-danger' : 'label label-success'
    let contentStatus = task.status === "1" ? 'Kích hoạt' : 'Ẩn'

    return (
      <tr>
        <td>{++index}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={statusStyle}
            onClick={() => changeStatus(task.id)}
          >
            {contentStatus}
          </span>
        </td>
        <td className='text-center'>
          <button
            type='button'
            className='btn btn-warning margin-right-5'
            onClick={()=>toggleEditForm(task.id)}
          >
            <span className='fa fa-pencil mr-5'>Sửa</span>
          </button>
          <button
            type='button'
            className='btn btn-danger margin-right-5'
            onClick={()=>deleteTask(task.id)}
          >
            <span className='fa fa-trash mr-5'>Xóa</span>
          </button>
        </td>
      </tr>
    )
  }
}

export default TaskItem
