import React, { useCallback, useEffect, useState } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function SideBar({ history, setHistory, hideSideBar, setHideSideBar, setQuery, fullScreen }) {
  const toggleBar = () => {
    setHideSideBar(!hideSideBar)
  }
  // handle clear history
  const clearHistory = useCallback(() => {
    const userConfirmation = window.confirm('Are you sure, want to delete the history?')
    if (userConfirmation) {
      setHistory('');
      localStorage.removeItem('history')
    }
  }, [])

  useEffect(() => {
    setHideSideBar(fullScreen);
  }, [fullScreen])

  useEffect(() => {
    if (localStorage.getItem('history')) {
      setHistory(JSON.parse(localStorage.getItem('history')).items)
    }
  }, [])
  return (
    <div className={`pb-4 relative ${hideSideBar ? 'w-[10px] p-4' : 'flex-[0.20]'} hidden md:block`}>
      <button className={`absolute p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-[5px] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[25px] h-[25px] flex justify-center items-center z-20 right-[-12px] top-[12px] outline-none `}
        onClick={() => toggleBar()}
      >{hideSideBar ? '>' : '<'}</button>
      <div className={`${hideSideBar ? 'hidden' : 'block'}`}>
        <div className='pl-5 border-b-[1px] border-[#ffffff33] h-[50px] flex items-center justify-between'><span className=''>History</span><DeleteOutlineIcon className='mr-4 cursor-pointer' onClick={()=>clearHistory()} /> </div>
        <div className='overflow-y-scroll h-[90vh]'>
          {
            history && history.map((item) => (
            <div class="bg-[#343541] clamp-1 m-2 p-2 rounded-[5px] overflow-hidden text-sm cursor-pointer flex items-center" onClick={() => setQuery(item)}>
              <p class="line-clamp-1 text-sm">
                <ArrowOutwardIcon style={{fontSize: '16px'}} /> {item}
              </p>
            </div>))
          }
        </div>
      </div>
    </div>
  )
}

export default SideBar