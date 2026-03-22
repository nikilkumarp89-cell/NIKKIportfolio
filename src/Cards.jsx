import React from 'react';

const Cards = (nikil) => {
  return (
    <div className="glass glass-hover p-4 rounded-2xl flex items-center w-full justify-between transition-all duration-300 transform">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-400 mb-1 capitalize tracking-wide">
          {nikil.name}
        </span>
        <div className="text-4xl font-bold text-white relative inline-block">
          {nikil.Count}
          <span className="absolute -top-1 -right-3 h-2.5 w-2.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)] animate-pulse"></span>
        </div>
      </div>
      <div className="text-fuchsia-400 bg-fuchsia-500/10 p-4 rounded-xl shadow-inner border border-fuchsia-500/20">
        <div className="text-2xl">
          {nikil.ico}
        </div>
      </div>
    </div>
  );
};

export default Cards;
