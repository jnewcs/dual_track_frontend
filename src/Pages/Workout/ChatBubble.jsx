import React, { useState, useEffect } from 'react';
import { useAuthState } from '../../Context';
import ChatInterface from './ChatInterface';

const ChatBubble = ({ showChat, channel, chatHistory, setChatHistory, unreadMessage, setUnreadStatus, members }) => {
  const [open, setOpenStatus] = useState(false);
  const [message, setMessage] = useState('');
  const { email } = useAuthState();

  useEffect(() => {
    const lastElement = document.getElementById('last-chat-element');
    if (lastElement) {
      lastElement.scrollIntoView();
    }
  }, [chatHistory, open]);

  useEffect(() => {
    const escFunction = (e) => {
      if (e.keyCode !== 27) return;

      openChat(false);
    };

    if (open) {
      document.addEventListener('keydown', escFunction, false);
    } else {
      document.removeEventListener('keydown', escFunction, false);
    }
  }, [open]);  // eslint-disable-line

  if (!channel || !showChat) return null;

  const openChat = () => {
    if (open) {
      document.body.classList.remove('not-vertically-scrollable');
    } else {
      setUnreadStatus(false);
      document.body.classList.add('not-vertically-scrollable');
    }

    setOpenStatus(!open);
  };

  const closeChat = () => { openChat(false) };

  const sendMessage = () => {
    if (!message || !message.length) return;

    const formattedMessage = {
      id: chatHistory.length + 1,
      sender: email,
      message,
      timestamp: Date.now()
    };

    // Send message to others in the channel
    channel.trigger('client-chat-message', formattedMessage);
    setChatHistory([ ...chatHistory, formattedMessage ]);

    setMessage('');
  };

  return (
    <>
      <button
        className='button'
        tabIndex={0}
        onClick={openChat}
        disabled={Object.values(members).length < 2}
        onKeyUp={(e) => e.key === 'Enter' && openChat()}
      >
        Workout Chat
        {unreadMessage && <div className='dot ml-1 has-background-primary'></div>}
      </button>

      {Object.values(members).length < 2 && <div className='mt-2'>Waiting for others to join the workout :)</div>}

      <ChatInterface
        open={open}
        members={members}
        chatHistory={chatHistory}
        closeChat={closeChat}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </>
  );
};

export default ChatBubble;
