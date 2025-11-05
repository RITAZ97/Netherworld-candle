import { useState } from 'react';

const DropdownMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

 

   return (
    // 使用 'relative' 来作为下拉菜单的定位基准
    <div className="md:hidden relative">
      
      {/* 按钮区域 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none z-50" // z-50 确保图标在菜单之上
      >
        
        {isOpen ? (   
          <div className="w-5 md:w-8 h-auto">     
          <svg className=" text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </div>  
        ) : (
          <div className="w-5 md:w-8 h-auto">
          <svg className= "text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          </div>
        )}
      </button>
      <div
        className={`
          absolute top-full right-0 mt-2 w-48
          bg-brand-button-bg rounded-md shadow-lg z-40
          transition-all duration-200
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <nav className="flex flex-col p-2">
          <a href="#game" onClick={() => setIsOpen(false)} className="font-semibold text-primary rounded px-3 py-2 bg-gray-700 transition-colors">GAMES</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="font-semibold text-primary  rounded px-3 py-2 mt-1 bg-gray-700 transition-colors">ABOUT US</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="font-semibold text-primary  rounded px-3 py-2 mt-1 bg-gray-700 transition-colors">CONTACT</a>
          <a href="#sign in" onClick={() => setIsOpen(false)} className="font-semibold text-primary rounded px-3 py-2 mt-1 bg-gray-700 transition-colors">SIGN IN</a>
        </nav>
      </div>
    </div>
  );
};

export default DropdownMenu;