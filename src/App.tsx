import { useState } from 'react'
import songfestLogo from './assets/SongShitfestLogo.png' 
import './App.css'
import { createPortal } from 'react-dom'
import SongfestCreationModal from './SongfestCreationModal'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div>
        <center>
          <img src={songfestLogo} className="logo" alt="Song Shitfest Logo" />
        </center>
      </div>
      <div className="card">
        <button onClick={() => setShowModal(true)}>
          Create Songfest
        </button>
        {showModal && createPortal(
          <SongfestCreationModal onClose={() => setShowModal(false)} />, 
          document.body
        )}
        
      </div>
    </>
  )
}

export default App
