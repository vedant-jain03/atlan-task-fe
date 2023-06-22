import React, { useCallback, useState } from 'react'
import SideBar from '../components/SideBar'
import ShowEditor from '../components/ShowEditor'
import ShowOutput from '../components/ShowOutput'
import ShowTableInfo from '../components/ShowTableInfo'
import EditorNavbar from '../components/EditorNavbar'

function Editor() {
  const [isOutputLoad, setOutputLoad] = useState(false);
  const [outputData, setOutputData] = useState();
  const [query, setQuery] = useState('');
  const handleSubmit = useCallback(async () => {
    setOutputLoad(true);
    const { default: data } = await import('../assets/data/data.json');
    setOutputData(data);
    setOutputLoad(false);
  }, [query])

  return (
    <div className='flex item-center justify-between h-[100vh] w-[100vw] overflow-hidden bg-[#0d1116] text-[white]'>
      <SideBar />
      <div className='w-[100%] border-x-[1px] border-[#ffffff33]'>
        <EditorNavbar handleSubmit={handleSubmit} />
        <ShowEditor setQuery={setQuery} query={query} />
        <ShowOutput isOutputLoad={isOutputLoad} setOutputLoad={setOutputLoad} outputData={outputData} setOutputData={setOutputData} handleSubmit={handleSubmit} />
      </div>
      <ShowTableInfo />
    </div>
  )
}

export default Editor