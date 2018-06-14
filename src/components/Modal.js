import React, { Component } from 'react'
import _ from '../../node_modules/lodash'

import TaskItem from './TaskItem'

class Modal extends Component {
  render() {
    const {tasks, isDisplayModal, tasksSearch} = _.cloneDeep(this.props)
    return (
      <div className="modal fade in" id="modal-default" style={{display: 'block', paddingRight: '17px'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={isDisplayModal}
              >
                <span aria-hidden="true">×</span></button>
              <h4 className="modal-title">Result</h4>
            </div>
            <div className="modal-body">
              <table className="table table-bordered table-hover mr-15">
                <thead>
                  <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  { _.map(tasksSearch, (task, index) => {
                    return <TaskItem
                    key={task.id}
                    index={index}
                    task={task}
                    />
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                  type="button"
                  className="btn btn-default pull-right"
                  data-dismiss="modal"
                  onClick={isDisplayModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
