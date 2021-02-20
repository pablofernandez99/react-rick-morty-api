import React from 'react'
import loadable from '@loadable/component'
import './App.css';

const CharacterContextProvider = loadable(() => import('./context/context'))
const Header = loadable(() => import('./components/Header'))
const Content = loadable(() => import('./components/Content'))
const Footer = loadable(() => import('./components/Footer'))

function App() {
  return (
    <CharacterContextProvider>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </CharacterContextProvider>
  );
}

export default App;
