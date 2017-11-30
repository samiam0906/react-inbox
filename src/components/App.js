import React, { Component } from 'react';
import Messages from '../components/Messages';
import Toolbar from '../components/Toolbar';
import ComposeForm from '../components/ComposeForm';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { messages: props.messages }
  }

  toggleStar = (message) => {
    const messages = this.state.messages.slice()
    const index = this.state.messages.indexOf(message)
    messages[index].starred = !messages[index].starred

    this.setState({ messages: messages })
  }

  toggleSelect = (message) => {
    const messages = this.state.messages.slice()
    const index = this.state.messages.indexOf(message)

    messages[index].selected = !messages[index].selected

    this.setState({ messages: messages })
  }

  toggleRead = () => {
    const messages = this.state.messages.slice()

    const selectedMessages = messages.filter( message => message.selected === true)

    const selectedIndex = selectedMessages.map((message) => messages.indexOf(message))

    selectedIndex.forEach(index => {
      messages[index].read = true
      messages[index].selected = !messages[index].selected
      this.setState({ messages: messages })
    })
  }

  toggleUnread = () => {
    const messages = this.state.messages.slice()

    const selectedMessages = messages.filter( message => message.selected === true)

    const selectedIndex = selectedMessages.map((message) => messages.indexOf(message))

    selectedIndex.forEach(index => {
      messages[index].read = false
      messages[index].selected = !messages[index].selected
      this.setState({ messages: messages })
    })
  }

  toggleSelectAll = () => {
    const messages = this.state.messages.slice()
    const numSelected = messages.filter(message => message.selected === true).length;

    if (messages.length === numSelected) {
      messages.forEach((message) => {
        message.selected = false
      })
      this.setState({ messages: messages })
    } else {
      messages.forEach((message) => {
        message.selected = true
      })
      this.setState({ messages: messages })
    }
  }

  deleteMessage = () => {
    const messages = this.state.messages.slice()

    const selectedMessages = messages.filter(message => message.selected === true)

    const remainingMessages = messages.filter(message => selectedMessages.indexOf(message) === -1)

    this.setState({ messages: remainingMessages })
  }

  addLabel = (e) => {
    const messages = this.state.messages.slice()

    const selectedMessages = messages.filter(message => message.selected === true)

    const selectedIndex = selectedMessages.map((message) => messages.indexOf(message))

    let label = e.target.value

    selectedIndex.forEach(index => {
      if (label === 'Apply label') {
        this.setState({ messages: messages })
      } else {
        messages[index].labels.includes(label) ? messages[index].labels : messages[index].labels.push(label)
        this.setState({ messages: messages })
      }
    })
  }

  removeLabel = (e) => {
    const messages = this.state.messages.slice()

    const selectedMessages = messages.filter(message => message.selected === true)

    const selectedIndex = selectedMessages.map((message) => messages.indexOf(message))

    let label = e.target.value

    selectedIndex.forEach(index => {
      if (label === 'Apply label') {
        this.setState({ messages:messages })
      } else {
        let labelIndex = messages[index].labels.indexOf(label)
        messages[index].labels.includes(label) ? messages[index].labels.splice(labelIndex, 1) : messages[index].labels
        this.setState({ messages: messages })
      }
    })
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">React Inbox</a>
            </div>
          </div>
        </div>
        <div className="container">
          <Toolbar toggleRead={this.toggleRead} toggleUnread={this.toggleUnread} toggleSelectAll={this.toggleSelectAll} deleteMessage={this.deleteMessage} addLabel={this.addLabel} removeLabel={this.removeLabel} messages={this.state.messages} />

          <ComposeForm />

          <Messages messages={this.state.messages} toggleStar={this.toggleStar} toggleSelect={this.toggleSelect} addLabel={this.addLabel} removeLabel={this.removeLabel} />
        </div>
      </div>
    );
  }
}

export default App;
