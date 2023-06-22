import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
import ShowEditor from '../components/ShowEditor'
import ShowOutput from '../components/ShowOutput'
import ShowTableInfo from '../components/ShowTableInfo'
import EditorNavbar from '../components/EditorNavbar'
import SideBar from '../components/SideBar'

function Editor() {
  const [isOutputLoad, setOutputLoad] = useState(false);
  const [outputData, setOutputData] = useState();
  const [query, setQuery] = useState('SELECT * FROM Customer;');
  const [showOutputTerminal, setShowOutputTerminal] = useState(false);
  const [history, setHistory] = useState([])
  const [fullScreen, setFullScreen] = useState(false);
  const [hideSideBar, setHideSideBar] = useState(false);
  const [hideTableSideBar, setHideTableSideBar] = useState(false);

  // query executer handler
  const handleSubmit = useCallback(async () => {
    setShowOutputTerminal(true)
    setOutputLoad(true);
    // hard coded query
    if (query.toLowerCase() === "select * from customer;") {
      var { default: data } = await import('../assets/data/customer.json');
    } else if (query.toLowerCase() === "select * from product;") {
      var { default: data } = await import('../assets/data/product.json');
    } else if (query.toLowerCase() === "select * from supplier;") {
      var { default: data } = await import('../assets/data/supplier.json');
    } else {
      var { default: data } = await import('../assets/data/product.json');
    }
    setOutputData(data);
    setOutputLoad(false);
    setHistory([...history, query]);
    localStorage.setItem('history', JSON.stringify({ items: [...history, query] }));
  }, [query])

  // file importer handler
  const handleFileImport = useCallback((e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const content = event.target.result;
        setQuery(content);
      };

      reader.readAsText(file);
    }
  }, [])

  return (
    <div className='flex item-center justify-between h-[100vh] w-[100vw] overflow-hidden bg-[#0d1116] text-[white]'>
      <SideBar history={history} setHistory={setHistory} hideSideBar={hideSideBar} setHideSideBar={setHideSideBar} setQuery={setQuery} fullScreen={fullScreen} />
      <div className={`w-[100%] border-x-[1px] border-[#ffffff33] flex-[0.60] ${(hideSideBar && hideTableSideBar) ? 'flex-[0.95]' : (hideSideBar || hideTableSideBar) ? 'flex-[0.8]':'flex-[0.60]'} overflow-x-scroll h-[100vh] overflow-y-hidden`}>
        <EditorNavbar handleSubmit={handleSubmit} handleFileImport={handleFileImport} query={query} setFullScreen={setFullScreen} fullScreen={fullScreen} />
        <ShowEditor setQuery={setQuery} query={query} showOutputTerminal={showOutputTerminal} fullScreen={fullScreen} />
        <ShowOutput hideTableSideBar={hideTableSideBar} hideSideBar={hideSideBar} isOutputLoad={isOutputLoad} setOutputLoad={setOutputLoad} outputData={outputData} setOutputData={setOutputData} handleSubmit={handleSubmit} setShowOutputTerminal={setShowOutputTerminal} showOutputTerminal={showOutputTerminal} fullScreen={fullScreen} />
      </div>
      <ShowTableInfo hideTableSideBar={hideTableSideBar} setHideTableSideBar={setHideTableSideBar} setQuery={setQuery} fullScreen={fullScreen} />
    </div>
  )
}

export default Editor