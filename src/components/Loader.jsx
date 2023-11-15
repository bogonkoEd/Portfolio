import { Html, useProgress } from '@react-three/drei'

function Loader() {
  const { progress } = useProgress()
  return <Html center>
    <span className='canvas-load'>
    <p style={{
      fontSize: 14,
      fontWeight: 900,
      marginTop: 40,
      color: '#f1f1f1',
    }}>{progress.toFixed(1)} % loaded</p>
    </span>
    </Html>
}

export default Loader;

