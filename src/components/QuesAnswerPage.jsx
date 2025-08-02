import React, { useState, useEffect } from 'react';
import QuesLoadingPage from './QuesLoadingPage';
import PollOptions from './PollOptions';
import useSocketQuestions from '../hooks/useSocketQuestions.js';
import useCountdown from '../hooks/useCountDown.js';
import axios from 'axios';

const QuesAnswerPage = () => {
  const receivedPoll = useSocketQuestions();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [pollHistory, setPollHistory] = useState([]);

  const { timeLeft, stop } = useCountdown(receivedPoll?.duration || 0);

  const handleOptionClick = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    stop();
  };

  const fetchHistory = async () => {
    try {
      const res = await axios.get('https://polling-backend-xr61.onrender.com/polls');
      setPollHistory(res.data);
      setShowHistory((prev) => !prev);
    } catch (err) {
      console.error('Error fetching poll history:', err);
    }
  };

  const clearPollHistory = async () => {
    const confirmClear = window.confirm('Are you sure you want to delete all poll history?');
    if (!confirmClear) return;

    try {
      await axios.delete('https://polling-backend-xr61.onrender.com/polls');
      setPollHistory([]); // Clear from UI too
      alert('✅ All poll history deleted');
    } catch (err) {
      console.error('Error deleting poll history:', err);
      alert('❌ Failed to delete poll history');
    }
  };

  return (
    <>
      <div className="flex justify-end  mx-7 space-x-4">
        <button
          onClick={fetchHistory}
          className="rounded-full w-52 p-2 text-[18px] text-white m-2 bg-gradient-to-r from-[#5767D0] via-[#4F0DCE] to-[#7765DA]">
          👁️ {showHistory ? 'Hide' : 'View'} Poll History
        </button>
        {showHistory && (
          <button
            onClick={clearPollHistory}
            className="rounded-full border-2 w-52 p-2 text-[18px] text-[#4F0DCE]m-2  border-[#5767D0] ">
            Delete History
          </button>
        )}
      </div>

      {!showHistory ? (
        <div className="w-[730px] mx-auto my-10 p-6 text-center">
          {receivedPoll ? (
            <>
              <div className="flex justify-between mb-2 text-lg font-semibold">
                <span>Question 1</span>
                <span className="flex items-center gap-1 text-red-600 font-semibold text-sm">
                  ⏱️ <span className="font-bold">00:{String(timeLeft).padStart(2, '0')}</span>
                </span>
              </div>

              <div className="border border-[#4F0DCE] rounded-xl">
                <div className="bg-gradient-to-r from-[#4B4B4B] to-[#1f1f1f] text-white p-3 rounded-t-xl text-left font-semibold">
                  {receivedPoll.question}
                </div>

                <PollOptions
                  options={receivedPoll.options}
                  pollId={receivedPoll.id}
                  onOptionClick={handleOptionClick}
                  selectedIndex={selectedOption}
                />
              </div>
            </>
          ) : (
            <QuesLoadingPage />
          )}
        </div>
      ) : (
        <div className="w-[730px] mx-auto my-10 p-6">
          <h2 className="text-xl font-bold mb-4">Poll History</h2>
          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-3">
            {pollHistory.length > 0 ? (
              pollHistory.map((poll, index) => (
                <div key={poll._id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                  <h3 className="font-semibold mb-2">Q{index + 1}: {poll.question}</h3>
                  <ul className="space-y-2">
                    {poll.options.map((option, i) => (
                      <li key={i} className="flex justify-between px-3 py-2 bg-gray-100 rounded">
                        <span>{option.text}</span>
                        <span className="font-medium text-indigo-600">{option.votes} votes</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No poll history available.</p>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-end mx-7">
        <button className="rounded-full p-2 text-[18px] text-white m-2 bg-gradient-to-r from-[#5767D0] via-[#4F0DCE] to-[#7765DA]">
          💬
        </button>
      </div>
    </>
  );
};

export default QuesAnswerPage;









