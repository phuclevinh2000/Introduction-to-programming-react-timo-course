// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [messageEditing, setMessageEditing] = useState('');
  const [message, setMessage] = useState([])
  
  const handleChange = (element) => {
    setMessageEditing(element.target.value)
  }

  const handleSendSubmit = (element) => {
    element.preventDefault();
    setMessage([...message, messageEditing]);
    window.localStorage.setItem('chat', JSON.stringify(message));
    setMessageEditing('')
  }

  const handleShowSubmit = (element) => {
    console.log(JSON.parse(window.localStorage.getItem('chat')))
  }
  return (
    <div className="App">
      <h1 className="Header">Chat to localStorage assignment</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Vitae et leo duis ut diam quam nulla porttitor massa. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Massa id neque aliquam vestibulum. Feugiat vivamus at augue eget arcu dictum varius. Blandit turpis cursus in hac habitasse platea dictumst. Cursus mattis molestie a iaculis. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Amet nulla facilisi morbi tempus iaculis urna. Cursus in hac habitasse platea dictumst. Et sollicitudin ac orci phasellus. Bibendum enim facilisis gravida neque. Urna porttitor rhoncus dolor purus non enim praesent. Sed vulputate mi sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Quis viverra nibh cras pulvinar mattis nunc sed blandit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Vitae et leo duis ut diam quam nulla porttitor massa. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Massa id neque aliquam vestibulum. Feugiat vivamus at augue eget arcu dictum varius. Blandit turpis cursus in hac habitasse platea dictumst. Cursus mattis molestie a iaculis. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Amet nulla facilisi morbi tempus iaculis urna. Cursus in hac habitasse platea dictumst. Et sollicitudin ac orci phasellus. Bibendum enim facilisis gravida neque. Urna porttitor rhoncus dolor purus non enim praesent. Sed vulputate mi sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Quis viverra nibh cras pulvinar mattis nunc sed blandit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Vitae et leo duis ut diam quam nulla porttitor massa. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Massa id neque aliquam vestibulum. Feugiat vivamus at augue eget arcu dictum varius. Blandit turpis cursus in hac habitasse platea dictumst. Cursus mattis molestie a iaculis. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Amet nulla facilisi morbi tempus iaculis urna. Cursus in hac habitasse platea dictumst. Et sollicitudin ac orci phasellus. Bibendum enim facilisis gravida neque. Urna porttitor rhoncus dolor purus non enim praesent. Sed vulputate mi sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Quis viverra nibh cras pulvinar mattis nunc sed blandit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Vitae et leo duis ut diam quam nulla porttitor massa. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Massa id neque aliquam vestibulum. Feugiat vivamus at augue eget arcu dictum varius. Blandit turpis cursus in hac habitasse platea dictumst. Cursus mattis molestie a iaculis. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Amet nulla facilisi morbi tempus iaculis urna. Cursus in hac habitasse platea dictumst. Et sollicitudin ac orci phasellus. Bibendum enim facilisis gravida neque. Urna porttitor rhoncus dolor purus non enim praesent. Sed vulputate mi sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Quis viverra nibh cras pulvinar mattis nunc sed blandit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Vitae et leo duis ut diam quam nulla porttitor massa. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Massa id neque aliquam vestibulum. Feugiat vivamus at augue eget arcu dictum varius. Blandit turpis cursus in hac habitasse platea dictumst. Cursus mattis molestie a iaculis. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Amet nulla facilisi morbi tempus iaculis urna. Cursus in hac habitasse platea dictumst. Et sollicitudin ac orci phasellus. Bibendum enim facilisis gravida neque. Urna porttitor rhoncus dolor purus non enim praesent. Sed vulputate mi sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Quis viverra nibh cras pulvinar mattis nunc sed blandit.</p>
      <div className="inputForm">
        <span>
            <input type="text" id="chat" value={messageEditing} onChange={handleChange}/>
            <button onClick={handleSendSubmit}>Send</button>
        </span>

          <button onClick={handleShowSubmit}>Show messages</button>
      </div>
     
    </div>
  );
}

export default App;
