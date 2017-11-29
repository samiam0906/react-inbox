import React from 'react'

const Message = ({ message, toggleStar, toggleSelect, addLabel, removeLabel }) => {
  const starClass = message.starred ? 'fa-star' : 'fa-star-o'

  const selectedClass = message.selected ? 'selected' : ''

  const readClass = message.read ? 'read' : 'unread'

  const starMessage = (e) => {
    e.stopPropagation()
    toggleStar(message)
  }

  const selectMessage = (e) => {
    toggleSelect(message)
  }

  return (
    <div className={`row message ${selectedClass} ${readClass}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2" onClick={ selectMessage }>
            <input type="checkbox" readOnly={ true } checked={ !!message.selected } />
          </div>
          <div className="star-container col-xs-2" onClick={ starMessage }>
            <i className={`star fa ${starClass}`}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        { message.labels.map((label, i) => <span key={ i } className='label label-warning'>{label}</span>) }
        {message.subject}
      </div>
    </div>
  )
}

export default Message
