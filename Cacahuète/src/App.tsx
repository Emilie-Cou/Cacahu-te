import reactLogo from './assets/sucreDorge.jpeg'
import viteLogo from './assets/sapin.jpeg'
import './App.css'
import Presentation from './présentation/présentation';
import Jeu from './jeu/jeu';

function App() {

  return (
    <>
      <Presentation />
      <Jeu />
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </>
  )
}

export default App
