import React, { Suspense } from 'react';
import './App.css';
import Loading from './components/Loading';

// components lazy loading
const Editor = React.lazy(() => import('./pages/Editor'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Editor />
      </Suspense>
    </div>
  );
}

export default App;
