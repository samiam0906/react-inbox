import React from 'react';

const Toolbar = ({ toggleRead, toggleUnread, toggleSelectAll, messages }) => {

  const selected = messages.filter(message => message.selected === true).length;

  const selectAllClass = (selected === messages.length) ? 'fa-check-square-o' : 'fa-square-o';

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <button onClick={ toggleSelectAll } className="btn btn-default">
          <i className={`fa ${selectAllClass}`}></i>
        </button>

        <button className="btn btn-default" disabled="" onClick={ toggleRead }>
          Mark As Read
        </button>

        <button className="btn btn-default" disabled="" onClick={ toggleUnread }>
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
