import React from 'react';
import { useAuthState } from '../../Context';

const ChatMembers = ({ members }) => {
  const { email } = useAuthState();
  if (!members || members.count < 2) return null;

  return (
    <h5 className='chat-title is-size-5'>
      People in Chat

      <br/>

      {Object.values(members).map(member => {
        const tagType = member.email === email ? 'is-link' : 'is-light';
        return (
          <div key={member.email} className={`tag ${tagType}`}>{member.email}</div>
        );
      })}
    </h5>
  );
};

export default ChatMembers;
