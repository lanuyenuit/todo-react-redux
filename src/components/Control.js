import React, { Component } from 'react'
import _ from '../../node_modules/lodash'

import Sort from './Sort'
import Search from './Search'

class Control extends Component {
  render() {
    const {handleInput, searchTasks, sortTasksAZ, sortTasksZA, sortStatusActive, sortStatusHide,
      toggleModal, tasks, isDisplayModal, tasksSearch} = _.clone(this.props)
    return (
      <div className='row mt-15 margin-top-10'>
        <Search
          handleInput={(e)=>handleInput(e, 'search')}
          searchTasks={()=>searchTasks()}
          toggleModal={toggleModal}
          tasks={tasks}
          isDisplayModal={isDisplayModal}
          tasksSearch={tasksSearch}
        />
        <Sort
          sortTasksAZ={sortTasksAZ}
          sortTasksZA={sortTasksZA}
          sortStatusActive={sortStatusActive}
          sortStatusHide={sortStatusHide}
        />
      </div>
    )
  }
}

export default Control
