import React, {Component} from 'react';
import _ from '../../node_modules/lodash'
import Modal from "./Modal"

class Search extends Component {
  render() {
    const {handleInput, searchTasks, toggleModal, tasks, isDisplayModal, tasksSearch} = _.clone(this.props)
    return (
      <div>
        {toggleModal &&
          <Modal
            tasks={tasks}
            isDisplayModal={isDisplayModal}
            tasksSearch={tasksSearch}
          />
        }
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Nhập từ khóa...'
              onChange={(e, field) => handleInput(e, 'search')}
            />
            <span className='input-group-btn'>
              <button
                className='btn btn-primary'
                type='button'
                onClick={(keyWordSearch) => searchTasks(keyWordSearch)}
              >
                <span className='fa fa-search mr-5'>Tìm</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
