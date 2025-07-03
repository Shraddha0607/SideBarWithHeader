import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Main from './Main'

function MainLayout() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default MainLayout
