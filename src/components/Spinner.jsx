import React from 'react';

const Spinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-12 h-12">
          <div className="w-full h-full absolute border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin" style={{ borderColor: 'transparent transparent #379cf6 transparent' }}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Spinner;
