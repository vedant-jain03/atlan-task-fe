import React, { useState } from 'react'

function SideBar() {
  const [hideBar, setHideBar] = useState(false);
  const toggleBar = () => {
    setHideBar(!hideBar)
  }
  return (
    <div className={`pb-4 relative ${hideBar ? 'w-[10px] p-4' : 'w-[300px]'}`}>
      <button className={`absolute p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-[5px] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[25px] h-[25px] flex justify-center items-center z-20 right-[-12px] top-[12px] outline-none `}
        onClick={() => toggleBar()}
      >{hideBar ? '>' : '<'}</button>
      <div className={`${hideBar ? 'hidden' : 'block'}`}>
        <div className='pl-5 border-b-[1px] border-[#ffffff33] h-[50px] flex items-center justify-between'><span className=''>History</span></div>
      </div>
    </div>
  )
}

export default SideBar