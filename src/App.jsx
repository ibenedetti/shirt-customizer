
import { Canvas } from '@react-three/fiber'
import Custom from './components/custom'
import Configurator from './components/configurator'
import './App.css'
import { CustomizationProvider } from './Context/Customization'

function App() {
  return (
    <CustomizationProvider>
      <div className='App'>
        <Canvas>
          <color attach="background" args={['#040404']} />
          <fog attach="fog" args={['#040404', 10, 20]} />
          <Custom />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  )
}

export default App
