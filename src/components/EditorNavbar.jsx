import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
function EditorNavbar({ handleSubmit }) {
  return (
    <div className='w-[100%] flex pr-5 items-center h-[50px] flex items-center justify-between relative'>
      <div className='bg-[#282c34] h-[100%] p-2 px-4 flex items-center justify-center'>
        <span>Input</span>
      </div>
      <div>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 px-4 py-[5px] flex items-center justify-center text-center' onClick={() => handleSubmit()}>Run <PlayArrowIcon /></button>
      </div>
    </div>
  )
}

export default EditorNavbar