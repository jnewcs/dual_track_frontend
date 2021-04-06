import React, { useState } from 'react';

const ChatBubble = ({ channel }) => {
  const [open, setOpenStatus] = useState(false);

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

  return (
    <>
      <div className='button' onClick={openChat} tabIndex={0}>
        Workout Chat
      </div>

      {open && (
        <div className='chat-interface box has-background-link-light p-5'>
          <div
            tabIndex={0}
            className='delete is-clickable is-size-3 close-chat-interface'
            onClick={closeChat}
            dangerouslySetInnerHTML={{ __html: '&#215;' }}
          />
          <div className='chat-title is-size-4'>
            Workout Chat
          </div>
          <div className='chat-messages box mt-2 p-3'>
            <div className='is-full-width is-flex is-justify-content-flex-end mb-1'>
              <div className='tag is-link from-me-message is-pulled-right'>Hi y'all! Let's crush this workout!</div>
            </div>

            <div className='mb-1'>
              <div className='tag is-info to-me-message'>Sweet, all the running!</div>
            </div>

            <div className='mb-1'>
              <div className='tag is-info to-me-message'>Sweet, all the running!</div>
            </div>

            <div className='is-full-width is-flex is-justify-content-flex-end mb-1'>
              <div className='tag is-link from-me-message is-pulled-right'>Hi y'all! Let's crush this workout!</div>
            </div>

            <div className='is-full-width is-flex is-justify-content-flex-end mb-1'>
              <div className='tag is-link from-me-message is-pulled-right'>Hi y'all! Let's crush this workout!</div>
            </div>

            <div className='mb-1'>
              <div className='tag is-info to-me-message'>Sweet, all the running!</div>
            </div>

            <div className='is-full-width is-flex is-justify-content-flex-end mb-1'>
              <div className='tag is-link from-me-message is-pulled-right'>Hi y'all! Let's crush this workout!</div>
            </div>

            <div className='mb-1'>
              <div className='tag is-info to-me-message'>Sweet, all the running!</div>
            </div>

            <div className='is-full-width is-flex is-justify-content-flex-end mb-1'>
              <div className='tag is-link from-me-message is-pulled-right'>Hi y'all! Let's crush this workout!</div>
            </div>

            <div className='mb-1'>
              <div className='tag is-info to-me-message'>Sweet, all the running!</div>
            </div>

            <div className='is-full-width is-flex is-justify-content-flex-end mb-1'>
              <div className='tag is-link from-me-message is-pulled-right'>Hi y'all! Let's crush this workout!</div>
            </div>

            <div className='mb-1'>
              <div className='tag is-info to-me-message'>Sweet, all the running!</div>
            </div>

            <div className='is-full-width is-flex is-justify-content-flex-end mb-1'>
              <div className='tag is-link from-me-message is-pulled-right'>Hi y'all! Let's crush this workout!</div>
            </div>

            <div className='mb-1'>
              <div className='tag is-info to-me-message'>Sweet, all the running!</div>
            </div>

            <div className='is-full-width is-flex is-justify-content-flex-end mb-1'>
              <div className='tag is-link from-me-message is-pulled-right'>Hi y'all! Let's crush this workout!</div>
            </div>

            <div className='mb-1'>
              <div className='tag is-info to-me-message'>Sweet, all the running!</div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
