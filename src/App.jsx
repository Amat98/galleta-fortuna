import phrases from './data/phrases.json'
import Phrase from './components/Phrase'
import './App.css'
import Author from './components/Author';
import { useState } from 'react';

function App() {

  const [phraseIndex, setPhraseIndex] = useState(Math.floor(Math.random() * phrases.length));


  const handleClick = () => {
    const newIndex = Math.floor(Math.random() * phrases.length);
    setPhraseIndex(newIndex);
    const newFondo = Math.floor(Math.random() * fondo.length);
    setIndexFondo(newFondo);
  };

  const fondo = ['fondo1','fondo2', 'fondo3', 'fondo4']
  const [indexfondo, setIndexFondo] = useState(0)
 

  

  document.body.style = `background-image: url(./src/img/${fondo[indexfondo]}.jpg);`

  return (
    <>
      <section className='container'>
        <h1 className='container-h1'>Galleta De La Fortuna</h1>
        <Phrase
        data={phrases[phraseIndex]} 
        />
        <Author
        data={phrases[phraseIndex]}
        />
        <button onClick={handleClick} className='button'>Intentar de nuevo</button>

      </section>
      
    </>
  )
}

export default App
