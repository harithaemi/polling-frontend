import React from 'react';
import  socket  from '../socket';

const PollOptions = ({ options, pollId, onOptionClick, selectedIndex }) => {
  const handleClick = (index) => {
    if (selectedIndex !== null) return; // prevent multiple votes
    socket.emit('submitVote', { pollId, optionIndex: index });
    onOptionClick(index);
  };

  const totalVotes = options.reduce((sum, opt) => sum + (opt.votes || 0), 0);

  return (
    <div className="flex flex-col p-2 gap-4">
      {options.map((option, index) => {
        const percentage = totalVotes
          ? ((option.votes || 0) / totalVotes * 100).toFixed(1)
          : 0;
        const isSelected = selectedIndex === index;

        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`border rounded-lg p-3 cursor-pointer flex justify-between items-center
              ${isSelected ? 'bg-[#5767D0] text-white' : 'hover:bg-violet-100'}`}
          >
            <p>{option.text}</p>
            {selectedIndex !== null && (
              <p className="text-sm">{percentage}%</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PollOptions;






