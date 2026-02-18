import { useState } from 'react';
import ContextApp from './context/App';
import ReduxApp from './redux/App';

function App() {
  const [view, setView] = useState('context');

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Context API vs Redux</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <button
          onClick={() => setView('context')}
          style={{ padding: '8px 16px', fontWeight: view === 'context' ? 'bold' : 'normal' }}
        >
          Context API
        </button>
        <button
          onClick={() => setView('redux')}
          style={{ padding: '8px 16px', fontWeight: view === 'redux' ? 'bold' : 'normal' }}
        >
          Redux
        </button>
      </div>

      {view === 'context' ? <ContextApp /> : <ReduxApp />}
    </div>
  );
}

export default App;
