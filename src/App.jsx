import { useState } from 'react'
import './App.css'
import ContentCenter from './components/ContentCenter'
import SideBarleft from './components/SideBarleft'
import SideBarRight from './components/SideBarRight'

function App() {

  return (
    <div className="App">
      <SideBarleft />
      <ContentCenter />
      <SideBarRight />
    </div>
  )
}

export default App
