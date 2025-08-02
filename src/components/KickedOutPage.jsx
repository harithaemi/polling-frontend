import React from 'react'
import logo from '../assets/logo.svg';
const KickedOutPage = () => {
  return (
   <div className="h-full min-h-screen flex flex-col items-center justify-center p-12">
     <div className="text-center w-3/4 px-7">
       <img src={logo} alt="logo" className="mx-auto mb-4" />
       <h1 className="text-[40px] font-bold">
         You've been Kicked out !
       </h1>
       <h2 className="text-[18px]">
Looks like the teacher had removed you from the poll system .Please 
Try again sometime.</h2>
     </div>
   
   
   </div>
  )
}

export default KickedOutPage
