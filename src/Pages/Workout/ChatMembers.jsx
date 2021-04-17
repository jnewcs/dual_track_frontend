import React from 'react';
import { useAuthState } from '../../Context';

const ChatMembers = ({ members }) => {
  const { email } = useAuthState();
  if (!members || members.count < 2) return null;

  return (
    <div>
      {Object.values(members).map(member => {
        const tagType = member.email === email ? 'is-link' : 'is-light';
        return (
          <div key={member.email} className={`tag mr-1 mb-1 ${tagType}`}>{member.email}</div>
        );
      })}
    </div>
  );
};

export default ChatMembers;
