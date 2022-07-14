import React from 'react'
import { Whatsapp, Map } from './components/atoms';
import { Modal, Main, About, Footer, GridImages } from './components/objects';
import { ContextProvider } from './context';
import AOS from 'aos';
// import { Theme } from './components/style';

function App() {
  AOS.init();
  return (
    <ContextProvider>
      <Main />
      <About />
      <GridImages />
      <Map />
      <Footer />
      <Whatsapp />
      <Modal />
    </ContextProvider>
  );
}

export default App;
