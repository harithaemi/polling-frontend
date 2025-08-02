import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LandingPage = () => {
 const [selectedRole, setSelectedRole] = useState(null);
const navigate = useNavigate();
  const handleContinue = () => {
    if (selectedRole === 'student') {
      navigate('/enrollname');
    } else if (selectedRole === 'teacher') {
      navigate('/quescreationpage');
    }
  };
  return (
     <>
 <div className='h-screen overflow-hidden flex flex-col items-center justify-center p-48'>
  <div className='text-center w-3/4 px-7 flex-wrap'>
    <img src={logo} alt="logo" className="mx-auto mb-4" />
    <h1 className='text-[40px]'>Welcome to the<span className='font-bold'> Live Polling System</span></h1>
    <h2 className='text-[18px] '>Please select the role that best describes you to begin using the live polling system</h2>
  </div>
  <div className='flex flex-row m-10 gap-8'>
    <div   tabIndex={0}  onClick={() => setSelectedRole('student')}
  className='w-80 border-2 border-gray-300 rounded-2xl p-6 mx-auto text-left focus:outline-none focus:border-[#7765DA] cursor-pointer'
>
<h1 className='font-bold text-[17px] mb-2'>I'm a Student</h1>
<h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
    </div>
     <div  tabIndex={0}  onClick={() => setSelectedRole('teacher')}className='w-80 border-2 border-gray-300 rounded-2xl p-6 mx-auto text-left focus:outline-none focus:border-[#7765DA] cursor-pointer'>

      <h1 className='font-bold text-[17px] mb-2'>I'm a Teacher</h1>
<h2>Submit answers and view live poll results in real-time.</h2>
    </div>
  </div>
  <button className='rounded-full w-60 p-4 text-[18px] text-white   bg-gradient-to-r from-[#5767D0] via-[#4F0DCE] to-[#7765DA]' type='submit' disabled={!selectedRole}
        onClick={handleContinue}>Continue</button>
</div>

    </>
  )
}

export default LandingPage;
