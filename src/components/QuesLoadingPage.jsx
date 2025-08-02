import React from 'react'
import logo from '../assets/logo.svg'; 
import loading from '../assets/loading.png';
const QuesLoadingPage = () => {
  return (
     <div className=" mt-30 flex flex-col items-center justify-center p-12">
     <div className="text-center  px-7">
       <img src={logo} alt="logo" className="mx-auto mb-4" />
       <h1 className="text-[30px] font-bold">
         wait for the Tewacher to ask questions
       </h1>
       <img src={loading} alt="loading" className="mx-auto mb-4 animate-spin " />
     </div>
   
   
   </div>
  )
}

export default QuesLoadingPage;
