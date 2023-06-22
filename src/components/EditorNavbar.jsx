import React, { memo } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';

const EditorNavbar = memo(({ handleSubmit, handleFileImport, query, setFullScreen, fullScreen }) => {
  return (
    <div className='w-[100%] flex pr-5 items-center h-[50px] flex items-center justify-between relative'>
      <div className='bg-[#282c34] h-[100%] p-2 px-4 flex items-center justify-center'>
        <span>Input</span>
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