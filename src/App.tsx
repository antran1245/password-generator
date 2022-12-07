import React from 'react';
import copy from './assets/images/icon-copy.svg'
import arrow from './assets/images/icon-arrow-right.svg'
import './App.css';

function App() {
  return (
    <main className="m-auto">
      <p className='text-grey heading-medium text-center mb-[31px] '>Password Generator</p>

      {/* Password that been generated */}
      <div className='bg-darkgrey flex justify-between items-center px-32 py-19 max-w-[540px] w-[95vw]'>
        <p className='text-white heading-large'>PTx1f5DaFX</p>
        <img src={copy} alt={'copy icon'}/>
      </div>

      {/* Control section for what the password include */}
      <div className='bg-darkgrey max-w-[540px] w-[95vw] pt-[24px] px-[32px] pb-[32px] mt-[24px]'>
        
        {/* Choose the length of the password to generate */}
        <div className='flex justify-between items-center'>
          <p className='text-white body'>Character Length</p>
          <p className='text-green heading-large'>10</p>
        </div>
        <input type="range" 
          max={32} min={1} defaultValue={16} 
          onChange={(e) => console.log(e.target.value)}
          className="slider w-full mt-[16px]" 
        />

        {/* Checkboxes section that let users choose what to include in their password */}
        <div className='my-[32px]'>
          <label className='form-control'>
            <input type="checkbox" />
            <p className='text-white body ml-[24px]'>Include Uppercase Letters</p>
          </label>
          <label className='form-control mt-[20px]'>
            <input type="checkbox" />
            <p className='text-white body ml-[24px]'>Include Lowercase Letters</p>
          </label>
          <label className='form-control mt-[20px]'>
            <input type="checkbox" />
            <p className='text-white body ml-[24px]'>Include Numbers</p>
          </label>
          <label className='form-control mt-[20px]'>
            <input type="checkbox" />
            <p className='text-white body ml-[24px]'>Include Symbols</p>
          </label>
        </div>

        {/* The strength of the password */}
        <div className='bg-black py-[20px] px-[32px] sm:py-[14px] sm:px-[16px] flex items-center justify-between'>
          <p className='text-grey body'>STRENGTH</p>
          <div className='flex items-center'>
            <p className='text-white heading-medium mr-[16px]'>MEDIUM</p>
            {/* Power bars */}
            <div className='boxes flex items-center'>
              <div className={`box bg-yellow`}></div>
              <div className={`box bg-yellow ml-[8px]`}></div>
              <div className={`box bg-yellow ml-[8px]`}></div>
              <div className={`box ml-[8px] border-[#E6E5EA] border-[2px]`}></div>
            </div>
          </div>
        </div>

        {/* Generate button */}
        <button className='text-darkgrey body w-full bg-green flex items-center justify-center py-[21px] mt-[32px]'>
          GENERATE
          <img src={arrow} alt="arrow" className='ml-[24px]'/>
        </button>
      </div>
    </main>
  );
}

export default App;
