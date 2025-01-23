import React from 'react';

function HomePage() {
  return (
    <div className="bg-[#030014] h-screen ">
      <div className="flex flex-col justify-center pl-64 bg-[url('/images/website-placeholder.png')] bg-right  bg-no-repeat w-full h-full">
        <div className="flex items-center justify-center w-40 h-20 bg-gray-500 rounded-full">
          <p className="text-white font-bold text-[40px]">2025</p>
        </div>
        <h1 className="text-[140px] font-semibold text-white">CRM</h1>
      </div>
    </div>
  );
}

export default HomePage;
