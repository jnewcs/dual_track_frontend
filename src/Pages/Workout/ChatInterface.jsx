import React from 'react';
import { useAuthState } from '../../Context';
import ChatMembers from './ChatMembers';

const ChatInterface = ({ open, members, chatHistory, closeChat, message, setMessage, sendMessage }) => {
  const { email } = useAuthState();

  if (!open || !members || Object.values(members).length < 2) {
    return null;
  }

  return (
    <div className='chat-interface box has-background-link-light p-5'>
      <div
        tabIndex={0}
        className='delete is-clickable is-size-3 close-chat-interface'
        onClick={closeChat}
        onKeyUp={(e) => e.key === 'Enter' && closeChat()}
        dangerouslySetInnerHTML={{ __html: '&#215;' }}
      />

      <ChatMembers members={members} />

      <div className='chat-messages box mt-2 p-3'>
        <div className='is-full-width is-flex is-justify-content-center mb-4'>
          <div className='tag is-dark'>This is the beginning of your conversation history</div>
        </div>

        {chatHistory.map((chat, index) => {
          if (chat.sender === email) {
            return (
              <div className='is-full-width is-flex is-justify-content-flex-end mb-2' key={`chat-me-${index}`}>
                <div className='tag is-medium is-link from-me-message is-pulled-right'>{chat.message}</div>
              </div>
            );
          }

          return (
            <div className='mb-2' key={`chat-others-${index}`}>
              <div className='tag is-medium is-light to-me-message'>{chat.message}</div>
            </div>
          );
        })}

        <div id='last-chat-element'></div>
      </div>

      <div className='chat-send-box box mt-2 p-3 mb-2'>
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
  );
};

export default ChatInterface;
