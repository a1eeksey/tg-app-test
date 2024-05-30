import { useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram"
import './App.css';
import Header from './components/Header/Header';

const tg = window.Telegram.WebApp

function App() {
  const {onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  })

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
