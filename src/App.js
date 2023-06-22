import React, { Suspense } from 'react';
import './App.css';

// components lazy loading
const Editor = React.lazy(() => import('./pages/Editor'))

function App() {
  return (
    <div className="App">
      <Suspense>
        <Editor />
      </Suspense>
    </div>
  );
}

export default App;
