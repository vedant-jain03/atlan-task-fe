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
  const [showOutputTerminal, setShowOutputTerminal] = useState(false);
  const [history, setHistory] = useState([])

  // query executer handler
  const handleSubmit = useCallback(async () => {
    setShowOutputTerminal(true)
    setOutputLoad(true);
    // hard coded query
    if(query.toLowerCase() === "select * from customer;") {
      var { default: data } = await import('../assets/data/customer.json');
    } else if (query.toLowerCase() === "select * from product;") {
      var { default: data } = await import('../assets/data/product.json');
    } else if (query.toLowerCase() === "select * from shop;") {
      var { default: data } = await import('../assets/data/shop.json');
    } else {
      var { default: data } = await import('../assets/data/product.json');
    }
    setOutputData(data);
    setOutputLoad(false);
    setHistory([...history, query]);
  }, [query])

  // file importer handler
  const handleFileImport = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const content = event.target.result;
        setQuery(content);
      };

      reader.readAsText(file);
    }

  }
  return (
    <div className='flex item-center justify-between h-[100vh] w-[100vw] overflow-hidden bg-[#0d1116] text-[white]'>
      <SideBar history={history} setQuery={setQuery} />
      <div className='w-[100%] border-x-[1px] border-[#ffffff33]'>
        <EditorNavbar handleSubmit={handleSubmit} handleFileImport={handleFileImport} query={query} />
        <ShowEditor setQuery={setQuery} query={query} showOutputTerminal={showOutputTerminal} />
        <ShowOutput isOutputLoad={isOutputLoad} setOutputLoad={setOutputLoad} outputData={outputData} setOutputData={setOutputData} handleSubmit={handleSubmit} setShowOutputTerminal={setShowOutputTerminal} showOutputTerminal={showOutputTerminal} />
      </div>
      <ShowTableInfo setQuery={setQuery} />
    </div>
  )
}

export default Editor