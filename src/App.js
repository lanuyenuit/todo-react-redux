import React, { Component } from 'react'
import './App.css'
import _ from '../node_modules/lodash'

import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: _.cloneDeep(this.props.tasks),
      task: {
        id: null,
        name: '',
        status: '1'
      },
      isDisplayForm: false,
      isEditTask: false,
      filter: {
        filterName: '',
        filterStatus: '-1'
      },
      tasksSearch: [],
      keyWordSearch: '',
      toggleStatus: false,
      toggleModal: false
    }
  }

  onGenerateData = () => {

  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  //get values of input and value of search
  handleInput = (e,field) => {
    let valueInput = e.target.value
    let {task, keyWordSearch, filter} = _.clone(this.state)

    task[field] = valueInput

    filter[field] = valueInput

    if (field === 'search') {
      keyWordSearch = valueInput
    }

    this.setState({
      task,
      keyWordSearch,
      filter
    })
  }

  //click them button or chinh sua button to save changes
  addTask = (e) => {
    e.preventDefault()

    let {tasks, } = _.cloneDeep(this.state)
    let {task} = _.clone(this.state)

    //save changes when add new
    if (!task.id) {
      task.id = Math.random().toString(16).substr(2, 9)

      tasks.push(task)
    }

    //save changes when edit
    else {
      _.forEach(tasks, (obj)=> {
        if (obj.id === task.id) {
          _.merge(obj, task)
        }
      })
    }

    this.setState({
      tasks,
      task: {
        id: null,
        name: '',
        status: '1'
      },
      isEditTask: false
    })
  }

  //delete task
  deleteTask = (id) => {
    let {tasks} = _.cloneDeep(this.state)

    _.remove(tasks, (task) => {
      return task.id ===  id
    })

    this.setState({
      tasks
    })
  }

  //toggle form edit task
  toggleEditForm = (id) => {
    let {tasks} = _.cloneDeep(this.state)

    let editTask = _.find(tasks, (task) => {
      return task.id === id
    })

    this.setState({
      isDisplayForm: true,
      task: editTask,
      isEditTask: true
    })
  }

  onFilter = (e, field ) => {
    let {filter} = _.clone(this.state)

    let {tasks} = _.cloneDeep(this.props)

    filter[field] = e.target.value

    let subTasks =_.filter(tasks, (task) => {
      return (
        (task.name.toLowerCase().indexOf(filter.filterName) !== -1) &&
        (task.status === filter.filterStatus || filter.filterStatus === '-1')
      )
    })

    this.setState({
      tasks: subTasks
    })
  }

  //Search tasks
  searchTasks = () => {
    let {keyWordSearch} = _.clone(this.state)

    let {tasks} = _.cloneDeep(this.props)

    let subTasks =_.filter(tasks, (task) => {
      return (
          (task.name.toLowerCase().indexOf(keyWordSearch) !== -1)
      )
    })

    this.setState({
      tasksSearch: subTasks,
      toggleModal: true
    })
  }

  sortTasksAZ = () => {
    let {tasks} = _.cloneDeep(this.state)

    tasks = _.sortBy(tasks, [(task) => {
      return task.name
    }])

    this.setState({
      tasks
    })
  }

  sortTasksZA = () => {
    let {tasks} = _.cloneDeep(this.state)

    tasks = _.sortBy(tasks, [(o) => {
      return o.name
    }])

    tasks.reverse()

    this.setState({
      tasks
    })
  }

  sortStatusActive = () => {
    let {tasks} = _.cloneDeep(this.state)

    let taskActive = []

    _.forEach(tasks, (task) => {
      if (task.status === '1') {
        taskActive.unshift(task)
      }
      else {
        taskActive.push(task)
      }
    })

    this.setState({
      tasks: taskActive
    })
  }

  sortStatusHide = () => {
    let {tasks} = _.cloneDeep(this.state)

    let taskHide = []

    _.forEach(tasks, (task) => {
      if (task.status === '0') {
        taskHide.unshift(task)
      }
      else {
        taskHide.push(task)
      }
    })

    this.setState({
      tasks: taskHide
    })
  }

  //change status
  changeStatus = (id) => {
    let {tasks} = _.clone(this.state)

    let idFound =_.findIndex(tasks, (o) => {
      return o.id === id
    })

    if (tasks[idFound].status === '1') {
      tasks[idFound].status = '0'
    }
    else {
      tasks[idFound].status = '1'
    }

    this.setState({
      tasks
    })
  }

  isDisplayModal = () => {
    let {tasks} = _.cloneDeep(this.state)
    this.setState({
      toggleModal: false,
      tasks
    })
  }

  componentDidMount() {

  }

  render() {
    let {tasks} = _.cloneDeep(this.state)
    let {isEditTask,isDisplayForm, task, filter, toggleModal, tasksSearch} = _.clone(this.state)

    let elmTaskForm = isDisplayForm ?
      <TaskForm
        onCloseForm={this.onCloseForm}
        handleInput={this.handleInput}
        addTask={this.addTask}
        task={task}
        isEditTask={isEditTask}
    /> : ''

    return (
      <div className='container'>
        <div className='text-center'>
          <h1>Quản Lý Công Việc</h1>
          <hr/>
        </div>
        <div className='row'>
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {elmTaskForm}
          </div>
          <div className={isDisplayForm ?
              'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-8 col-md-12 col-lg-12'}>
            <button
              type='button'
              className='btn btn-primary margin-right-5'
              onClick={this.onToggleForm}
            >
              <span className='fa fa-plus mr-5'>Thêm công việc</span>
            </button>
            <button
              type='button'
              className='btn btn-primary margin-right-5'
              onClick={this.onGenerateData}
            >
              Generate data
            </button>
            <Control
              handleInput={(e, field)=>this.handleInput(e,field)}
              searchTasks={(keyWordSearch)=>this.searchTasks(keyWordSearch)}
              sortTasksAZ={this.sortTasksAZ}
              sortTasksZA={this.sortTasksZA}
              sortStatusActive={this.sortStatusActive}
              sortStatusHide={this.sortStatusHide}
              toggleModal={toggleModal}
              tasks={tasks}
              isDisplayModal={this.isDisplayModal}
              tasksSearch={tasksSearch}
            />
            <div className='row mt-15'>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <TaskList
                  tasks={tasks}
                  deleteTask={(id)=>this.deleteTask(id)}
                  toggleEditForm={(id)=>this.toggleEditForm(id)}
                  filter={filter}
                  onFilter={(e, field)=>this.onFilter(e, field)}
                  changeStatus={(id) => this.changeStatus(id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
