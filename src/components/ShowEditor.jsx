import { sql } from '@codemirror/lang-sql';
import ReactCodeMirror from '@uiw/react-codemirror'
import React from 'react'

function ShowEditor({setQuery, query}) {
  const onChange = React.useCallback((value, viewUpdate) => {
    setQuery(value);
  }, []);
  return (
    <div className='w-[100%]'>
      <ReactCodeMirror
        value="SELECT * FROM table_name;"
        height="400px"
        extensions={[sql()]}
        onChange={onChange}
        theme={'dark'}
        syntaxHighlighting={true}
      />
    </div>
  )
}

export default ShowEditor