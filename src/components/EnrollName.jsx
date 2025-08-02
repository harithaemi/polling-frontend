import React from 'react'
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
const EnrollName = () => {
  const navigate = useNavigate();
  const handlecontinue=(e) => {
  e.preventDefault();
   navigate('/quesanswerpage');
  }
  return (
<div className="h-full min-h-screen flex flex-col items-center justify-center p-12">
  <div className="text-center w-3/4 px-7">
    <img src={logo} alt="logo" className="mx-auto mb-4" />
    <h1 className="text-[40px]">
      Let's <span className="font-bold">Get Started</span>
    </h1>
    <h2 className="text-[18px]">
      If you’re a student, you’ll be able to
      <span className="font-bold"> submit your answers</span>, participate in
      live polls, and see how your responses compare with your classmates
    </h2>
  </div>

  <form method="post" className="mt-8 w-full max-w-md">
    <label className="block text-left mb-2">Enter Your Name</label>
    <input
      type="text"
      className="w-full h-10 bg-gray-200 rounded px-4 mb-6"
      placeholder="Your name"
    />
    <div className="flex justify-center">
      <button
        type="submit"
        className="rounded-full w-60 p-4 text-[18px] text-white bg-gradient-to-r from-[#5767D0] via-[#4F0DCE] to-[#7765DA]"
        onClick={handlecontinue}
      >
        Continue
      </button>
    </div>
  </form>
</div>

  )
}

export default EnrollName;
