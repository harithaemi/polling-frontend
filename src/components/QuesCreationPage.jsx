import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

import socket from '../socket.js';

const QuesCreationPage = () => {
  const [pollData, setPollData] = useState({
    question: '',
    type: '',
    options: [],
    error: '',
  });
const navigate = useNavigate();
  const [question, setQuestion] = useState('');

  const sendQuestion = () => {
  if (question.trim() !== '') {
    socket.emit('send_question', {
      question,
      options: pollData.options
    });
    setQuestion('');
    // don't navigate anywhere
  }
};


  const handleAddOption = () => {
    setPollData((prev) => ({
      ...prev,
      options: [...prev.options, { text: '', isCorrect: null }],
    }));
  };

  const handleOptionChange = (index, key, value) => {
    const updated = [...pollData.options];
    updated[index][key] = value;
    setPollData({ ...pollData, options: updated });
  };

  return (
    <>
    <div className="w-3/4 px-7 mx-10">
      <div className="w-3xl">
        <img src={logo} alt="logo" className="mt-10" />
        <h1 className="text-[40px] my-3">
          Let's <span className="font-bold">Get Started</span>
        </h1>
        <h2 className="text-[18px]">
          You'll have the ability to create and manage polls, ask questions, and monitor your students' responses in real-time.
        </h2>
      </div>

      <div className="flex flex-row w-4xl justify-between mt-6">
        <label className="font-bold py-2.5">Enter your question</label>
        <select className="bg-gray-100 rounded-xs p-2.5">
          <option value="60">60 seconds</option>
          <option value="45">45 seconds</option>
        </select>
      </div>

      <textarea
        rows={4}
          value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Write your question"
        className="w-4xl p-2 h-44 bg-gray-100 my-4"
      />

      <label className="font-bold py-2.5 block">Edit Options</label>

      {pollData.options.map((opt, i) => (
        <div key={i} className="flex items-center justify-between my-2 w-4xl">
          <div className="flex items-center gap-2 w-[70%]">
            <div className="w-6 h-6 flex items-center justify-center text-white rounded-full bg-violet-600 font-semibold text-sm">
              {i + 1}
            </div>
            <input
              type="text"
              className="p-2.5 w-full bg-gray-100 rounded-md"
              placeholder="Type option..."
              value={opt.text}
              onChange={(e) =>
                handleOptionChange(i, 'text', e.target.value)
              }
            />
          </div>

          <div className="flex items-center gap-6 ">
            <label className="font-bold py-2.5 block">Is it Correct?</label>
            <label className="flex items-center gap-2 font-medium">
              <input
                type="radio"
                name={`correct-${i}`}
                className="w-5 h-5 accent-violet-500"
                onChange={() =>
                  handleOptionChange(i, 'isCorrect', true)
                }
                checked={opt.isCorrect === true}
              />
              Yes
            </label>
            <label className="flex items-center gap-2 font-medium">
              <input
                type="radio"
                name={`correct-${i}`}
                className="w-5 h-5 accent-violet-500"
                onChange={() =>
                  handleOptionChange(i, 'isCorrect', false)
                }
                checked={opt.isCorrect === false}
              />
              No
            </label>
          </div>
        </div>
      ))}

      <button
        onClick={handleAddOption}
        className="rounded-full w-60 p-2 text-[18px]  text-[#5767D0] my-4 border-2 border-[#4F0DCE] "
      >
        + Add More Option
      </button>
   
    </div>
    <hr className="w-full border-t border-gray-300 mb-4" />
<div className="flex justify-end mx-7">
 
  <button
    className="rounded-full w-40 p-2 text-[18px] text-white m-2 bg-gradient-to-r from-[#5767D0] via-[#4F0DCE] to-[#7765DA]"
    type="submit" onClick={sendQuestion}
  >
    Ask Questions
  </button>
</div>


    </>
  );
};

export default QuesCreationPage;


