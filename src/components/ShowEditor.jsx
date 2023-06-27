import { sql } from '@codemirror/lang-sql';
import ReactCodeMirror from '@uiw/react-codemirror'
import React, { memo } from 'react'

function ShowEditor({ setQuery, query, showOutputTerminal }) {
  const onChange = React.useCallback((value) => {
    setQuery(value);
  }, []);
  return (
    <div className='w-[100%]'>
      <ReactCodeMirror
        value={query}
        height={showOutputTerminal ? "400px" : '630px'}
        extensions={[sql()]}
        onChange={onChange}
        theme={'dark'}
        syntaxHighlighting={true}
      />
    </div>
  )
}

export default memo(ShowEditor);
