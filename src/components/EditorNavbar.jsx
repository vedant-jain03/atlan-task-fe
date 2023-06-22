import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function EditorNavbar({ handleSubmit, handleFileImport }) {
  return (
    <div className='w-[100%] flex pr-5 items-center h-[50px] flex items-center justify-between relative'>
      <div className='bg-[#282c34] h-[100%] p-2 px-4 flex items-center justify-center'>
        <span>Input</span>
      </div>
      <div className='flex items-center justify-center'>
        <label htmlFor="file-input" className='mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 px-4 py-[5px] flex items-center justify-center text-center cursor-pointer'>Import <FileUploadIcon /></label>
        <input id="file-input" className='hidden' type="file" onChange={(e) => handleFileImport(e)} />
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 px-4 py-[5px] flex items-center justify-center text-center' onClick={() => handleSubmit()}>Run <PlayArrowIcon /></button>
      </div>
    </div>
  )
}

export default EditorNavbar