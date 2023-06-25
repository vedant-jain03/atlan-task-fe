import React, { memo, useCallback, useEffect } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';

const EditorNavbar = memo(({ tabs, setTabs, activeTab, setActiveTab, handleSubmit, handleFileImport, query, setQuery, setFullScreen, fullScreen }) => {
  const handleActiveTab = (index) => {
    const updatedTabs = [...tabs];
    updatedTabs[activeTab] = query;
    setTabs(updatedTabs);
    setQuery(updatedTabs[index]);
    setActiveTab(index);
  }

  const handleAddTab = () => {
    const updatedTabs = [...tabs, '']
    setTabs(updatedTabs);
    setQuery(updatedTabs[updatedTabs.length - 1]);
    setActiveTab(updatedTabs.length - 1);
  }

  const handleRemoveTab = (index) => {
    const newTabsArray = tabs.filter((item, i) => i !== index)
    handleActiveTab(newTabsArray.length -1);
    setTabs(newTabsArray);
  }

  return (
    <div className='w-[100%] flex pr-5 items-center h-[50px] flex items-center justify-between relative'>
      <div className='flex h-[100%] items-center'>
        {
          tabs.map((item, index) => (
            <div className={`${activeTab === index ? 'bg-[#282c34]' : 'bg-[#0d1116] cursor-pointer' }  h-[100%] p-2 pl-4 flex items-center justify-center flex items-center justify-between w-[150px]`}>
              <div className='hover:underline w-[100px]' onClick={() => handleActiveTab(index)}><span>Console {index}</span></div>
              {index !==0 && <div className='bg-[#0d1116] bg-opacity-25 hover:bg-opacity-90 w-[25px] flex items-center justify-center rounded-[5px] cursor-pointer' onClick={() => handleRemoveTab(index)}><span>x</span></div>}
            </div>
          ))
        }
        <button className='p-2 text-sm font-large text-gray-900 focus:outline-none bg-white rounded-[5px] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[35px] h-[35px] flex justify-center items-center left-[-12px] top-[12px] outline-none ml-2 text-lg' onClick={() => handleAddTab()}>+</button>
      </div>
      <div className='flex items-center justify-center'>
        <button className={`p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-[5px] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[35px] h-[35px] flex justify-center items-center left-[-12px] top-[12px] outline-none mr-2`}
          onClick={() => setFullScreen(!fullScreen)}
          aria-label='Full-screen'
        ><SettingsOverscanIcon /></button>
        <label htmlFor="file-input" className='mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 px-4 py-[5px] flex items-center justify-center text-center cursor-pointer'>Import <FileUploadIcon /></label>
        <input id="file-input" className='hidden' type="file" onChange={(e) => handleFileImport(e)} />
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 px-4 py-[5px] flex items-center justify-center text-center disabled:opacity-75' onClick={() => handleSubmit()} disabled={query ? false : true}>Run <PlayArrowIcon /></button>
      </div>
    </div>
  )
})

export default EditorNavbar