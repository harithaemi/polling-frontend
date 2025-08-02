import { useState, useEffect } from 'react';
import socket from '../socket';

const useSocketQuestions = () => {
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    const handleQuestion = (newPoll) => {
      setPoll(newPoll);
    };

    const handleUpdate = (updatedPoll) => {
      setPoll(updatedPoll);
    };

    socket.on('newQuestion', handleQuestion);         // when question is first sent
    socket.on('updatePollResults', handleUpdate);     // after vote is submitted

    return () => {
      socket.off('newQuestion', handleQuestion);
      socket.off('updatePollResults', handleUpdate);
    };
  }, []);

  return poll;
};

export default useSocketQuestions;



