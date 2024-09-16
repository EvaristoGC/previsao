import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div>
      <h1>Previsão do Tempo</h1>
        <input type="text" placeholder='Digite o nome da cidade' />
        <button>Buscar</button>
    </div>
  )
}

export default App