import React from 'react';

const Toolbar = ({ toggleRead, toggleUnread, toggleSelectAll, deleteMessage, addLabel, removeLabel, messages }) => {

  const numSelected = messages.filter(message => message.selected === true).length;

  const disabledClass = (numSelected === 0) ? 'disabled' : ''

  const selectClass = (numSelected === messages.length) ? 'fa-check-square-o' : (numSelected > 0) ? 'fa-minus-square-o' : 'fa-square-o';

  const numUnread = messages.filter(message => message.read === false).length

  const numUnreadText = (numUnread === 1) ? 'message' : 'messages'

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{ numUnread }</span>
          unread {numUnreadText}
        </p>

        <button onClick={ toggleSelectAll } className="btn btn-default">
          <i className={`fa ${selectClass}`}></i>
        </button>

        <button className="btn btn-default" disabled={disabledClass} onClick={ toggleRead }>
          Mark As Read
        </button>

        <button className="btn btn-default" disabled={disabledClass} onClick={ toggleUnread }>
          Mark As Unread
        </button>

        <select className="form-control label-select" disabled={disabledClass} onChange={ addLabel }>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" disabled={disabledClass} onChange={ removeLabel }>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" disabled={disabledClass} onClick={ deleteMessage }>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}

export default Toolbar;
