import React, { useState, useEffect } from 'react';

const ChatBubble = ({ channel, chatHistory, setChatHistory }) => {
  const [open, setOpenStatus] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const lastElement = document.getElementById('last-chat-element')
    if (lastElement) {
      lastElement.scrollIntoView();
    }
  }, [chatHistory]);

  useEffect(() => {
    const escFunction = (e) => {
      if (e.keyCode !== 27) return;

      setOpenStatus(false);
    };

    if (open) {
      document.addEventListener('keydown', escFunction, false);
    } else {
      document.removeEventListener('keydown', escFunction, false);
    }
  }, [open]);

  if (!channel) return null;

  const openChat = () => {
    if (open) {
      document.body.classList.remove('not-vertically-scrollable');
    } else {
      document.body.classList.add('not-vertically-scrollable');
    }

    setOpenStatus(!open);
  };
  const closeChat = () => {
    document.body.classList.remove('not-vertically-scrollable');
    setOpenStatus(false);
  };

  const sendMessage = () => {
    if (!message || !message.length) return;

    const formattedMessage = {
      id: chatHistory.length + 1,
      sender: 'me',
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
      <div className='button' tabIndex={0} onClick={openChat} onKeyUp={(e) => e.key === 'Enter' && openChat()}>
        Workout Chat
      </div>

      {open && (
        <div className='chat-interface box has-background-link-light p-5'>
          <div
            tabIndex={0}
            className='delete is-clickable is-size-3 close-chat-interface'
            onClick={closeChat}
            onKeyUp={(e) => e.key === 'Enter' && closeChat()}
            dangerouslySetInnerHTML={{ __html: '&#215;' }}
          />

          <h4 className='chat-title is-size-4'>
            Workout Chat
          </h4>

          <div className='chat-messages box mt-2 p-3'>
            <div className='is-full-width is-flex is-justify-content-center mb-1'>
              <div className='tag is-dark from-me-message'>This is the beginning of your conversation history</div>
            </div>

            {chatHistory.map((chat, index) => {
              if (chat.sender === 'me') {
                return (
                  <div className='is-full-width is-flex is-justify-content-flex-end mb-1' key={`chat-me-${index}`}>
                    <div className='tag is-link from-me-message is-pulled-right'>{chat.message}</div>
                  </div>
                );
              }

              return (
                <div className='mb-1' key={`chat-others-${index}`}>
                  <div className='tag is-light to-me-message'>{chat.message}</div>
                </div>
              );
            })}

            <div id='last-chat-element'></div>
          </div>

          <div className='chat-send-box box mt-2 p-3'>
            <div className='is-flex'>
              <input
                className='input is-normal'
                type='text'
                placeholder='Enter your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && sendMessage()}
              />
              <div className='button is-primary ml-2' tabIndex={0} onClick={sendMessage} disabled={!message || !message.length}>
                Send
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
