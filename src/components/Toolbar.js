import React from 'react';

const Toolbar = ({ toggleRead, selectAll, messages }) => {

  // let selectAllClass;
  //
  // if (messages.selected.find(false)) {
  //   selectAllClass = ''
  // } else {
  //   selectAllClass = "fa-check-square-o"
  // }

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <button onClick={ selectAll } className="btn btn-default">
          <i className={`fa fa-square-o`}></i>
        </button>

        <button className="btn btn-default" disabled="" onClick={ toggleRead }>
          Mark As Read
        </button>

        <button className="btn btn-default" disabled="disabled">
          Mark As Unread
        </button>

        <select className="form-control label-select" disabled="disabled">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" disabled="disabled">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" disabled="disabled">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}

export default Toolbar;
