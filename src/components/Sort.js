import React, { Component } from 'react';
import _ from '../../node_modules/lodash'

class Sort extends Component {
  render() {

    let {sortTasksAZ, sortTasksZA, sortStatusActive, sortStatusHide} = _.clone(this.props)
    return (
      <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
        <div className='dropdown'>
          <button className='btn btn-primary dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
            <span className='fa fa-caret-square-o-down ml-5'>Sắp Xếp</span>
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
            <li onClick={sortTasksAZ}>
              <a role='button'>
                <span className='fa fa-sort-alpha-asc pr-5'>
                    Tên A-Z
                </span>
              </a>
            </li>
            <li onClick={sortTasksZA}>
              <a role='button'>
                <span className='fa fa-sort-alpha-desc pr-5'>
                    Tên Z-A
                </span>
              </a>
            </li>
            <li role='separator' className='divider'></li>
            <li onClick={sortStatusActive}>
              <a role='button'>Trạng Thái Kích Hoạt</a>
            </li>
            <li onClick={sortStatusHide}>
              <a role='button'>Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
