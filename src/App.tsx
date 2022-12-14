import React, { useEffect, useState } from 'react';
import copy from './assets/images/icon-copy.svg'
import arrow from './assets/images/icon-arrow-right.svg'
import './App.css';

function App() {
  const [slideNum, setSlideNum] = useState<number>(10)
  const [level, setLevel] = useState<string>('TOO WEAK!')
  const [bar, setBar] = useState<number>(1)
  const [include, setInclude] = useState<{uppercase: boolean, lowercase: boolean, numbers: boolean, symbols: boolean} | any>({uppercase: false, lowercase: false, numbers: false, symbols: false})
  const [possibleSymbols, setPossibleSymbols] = useState<string>("~`!@#$%^&*()_-+={[}]|:;<,>.?/")
  const [password, setPassword] = useState<string>('PTx1f5DaFX')
  const [copied, setCopied] = useState<boolean>(false)

  useEffect(() => {
    setCopied(false)
    // Determine the strength of the passwword
    let strength = 0
    if (slideNum >= 16) {
      strength++
    } else if (slideNum < 16 && slideNum >= 8) {
      strength -= 1
    } else if (slideNum < 8) {
      strength -= 2
    }
    for(const key in include) {
      if(include[key]) {
        strength++
      }
    }
    // Set the number of bar and message
    if(strength <= 2) {
      setLevel('TOO WEAK!')
      setBar(1)
    }
    if(strength === 3) {
      setLevel('WEAK')
      setBar(2)
    }
    if(strength === 4) {
      setLevel('MEDIUM')
      setBar(3)
    }
    if(strength === 5) {
      setLevel('STRONG')
      setBar(4)
    }
  }, [slideNum, include])

  const generate = () => {
    setCopied(false)
    // Default string with possible addition depending on what is check
    let passwordGenerated = ''
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numbers = '0123456789'
    // add onto the lowercase string base on check
    if(include.uppercase) {
      lowercase += uppercase
    }
    if(include.numbers) {
      lowercase += numbers
    }
    if(include.symbols) {
      lowercase += possibleSymbols
    }

    // Randomly add letter into one string
    let lengthOfPossible = lowercase.length
    for(let i = 0; i < slideNum; i++) {
      let index = Math.floor(Math.random() * lengthOfPossible)
      passwordGenerated += lowercase[index]
    }
    setPassword(passwordGenerated)
  }

  const copying = () =>  {
    navigator.clipboard.writeText(password)
    setCopied(true)
  }
  return (
    <main className="m-auto">
      <p className='text-grey heading-medium text-center mb-[31px] '>Password Generator</p>

      {/* Password that been generated */}
      <div className='bg-darkgrey flex justify-between items-center px-32 py-19 max-w-[540px] w-[95vw]'>
        <p className={`text-white heading-large ${copied? 'w-[70%]' : 'w-[90%]'} overflow-x-hidden`}>{password}</p>
        <div className='flex'>
          {
            copied?
            <p className='text-green body mr-[16px]'>COPIED</p> : null
          }
          <img src={copy} alt={'copy icon'} className="cursor-pointer hover:contrast-[400%]" onClick={() => copying()}/>
        </div>
      </div>

      {/* Control section for what the password include */}
      <div className='bg-darkgrey max-w-[540px] w-[95vw] pt-[24px] px-[32px] pb-[32px] mt-[24px]'>
        
        {/* Choose the length of the password to generate */}
        <div className='flex justify-between items-center'>
          <p className='text-white body'>Character Length</p>
          <p className='text-green heading-large'>{slideNum}</p>
        </div>
        <label>
          <input type="range" 
            max={32} min={1} value={slideNum} 
            onChange={(e) => setSlideNum(Number(e.target.value))}
            className="slider cursor-pointer w-full mt-[16px]" 
            />
        </label>

        {/* Checkboxes section that let users choose what to include in their password */}
        <div className='my-[32px]'>
          <label className='form-control'>
            <input type="checkbox" onChange={(e) => setInclude({...include, uppercase: e.target.checked})}/>
            <span className='text-white body ml-[24px]'>Include Uppercase Letters (A-Z)</span>
          </label>
          <label className='form-control mt-[20px]'>
            <input type="checkbox" onChange={(e) => setInclude({...include, lowercase: e.target.checked})}/>
            <span className='text-white body ml-[24px]'>Include Lowercase Letters (a-z)</span>
          </label>
          <label className='form-control mt-[20px]'>
            <input type="checkbox" onChange={(e) => setInclude({...include, numbers: e.target.checked})}/>
            <span className='text-white body ml-[24px]'>Include Numbers (0-9)</span>
          </label>
          <div className='form-control mt-[20px] w-[100%]'>
            <label>
              <input type="checkbox" onChange={(e) => setInclude({...include, symbols: e.target.checked})}/>
            </label>
            <label className='flex flex-col items-start w-[100%]'>
              <span className='text-white body ml-[24px] w-fit'>Include Symbols</span>
              <input type={'text'} className="body w-[90%] ml-[24px] mt-[5px]" placeholder={"~`!@#$%^&*()_-+={[}]|:;<,>.?/"} value={possibleSymbols} onChange={(e) => setPossibleSymbols(e.target.value)}/>
            </label>
          </div>
        </div>

        {/* The strength of the password */}
        <div className='bg-black py-[20px] px-[32px] sm:py-[14px] sm:px-[16px] flex items-center justify-between'>
          <p className='text-grey body'>STRENGTH</p>
          <div className='flex items-center'>
            <p className='text-white heading-medium mr-[16px]'>{level}</p>
            {/* Power bars */}
            <div className='boxes flex items-center'>
              <div className={`box ${bar === 0? 'border-[#E6E5EA] border-[2px]' : ''} ${bar === 1?'bg-red' : ''} ${bar === 2?'bg-orange' : ''} ${bar === 3?'bg-yellow' : ''} ${bar === 4?'bg-green' : ''}`}></div>
              <div className={`box ml-[8px] ${bar <= 1? 'border-[#E6E5EA] border-[2px]' : ''} ${bar === 2?'bg-orange' : ''} ${bar === 3?'bg-yellow' : ''} ${bar === 4?'bg-green' : ''}`}></div>
              <div className={`box ml-[8px] ${bar <= 2? 'border-[#E6E5EA] border-[2px]' : ''} ${bar === 3?'bg-yellow' : ''} ${bar === 4?'bg-green' : ''}`}></div>
              <div className={`box ml-[8px] ${bar <= 3? 'border-[#E6E5EA] border-[2px]' : ''} ${bar === 4?'bg-green' : ''}`}></div>
            </div>
          </div>
        </div>

        {/* Generate button */}
        <button onClick={() => generate()} className='generate text-darkgrey hover:text-green body border-[2px] hover:border-[#A4FFAF] hover:border-[2px] w-full bg-green hover:bg-darkgrey flex items-center justify-center py-[21px] mt-[32px]'>
          GENERATE
          <img src={arrow} alt="arrow" className='ml-[24px]'/>
        </button>
      </div>
    </main>
  );
}

export default App;
