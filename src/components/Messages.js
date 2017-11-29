import React from 'react'
import Message from './Message'

const Messages = ({ messages, toggleStar, toggleSelect, addLabel, removeLabel }) => {
  return (
    <div>
      {messages.map(message => (<Message key={message.id} message={message} toggleStar={toggleStar} toggleSelect={toggleSelect} addLabel={addLabel} removeLabel={removeLabel} />))}
    </div>
  )
}

export default Messages
