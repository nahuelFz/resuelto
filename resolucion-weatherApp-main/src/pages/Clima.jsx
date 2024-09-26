import ClimaDetalle from '../components/ClimaDetalle'
import Historial from '../components/Historial'
import useClima from '../hooks/useClima'
import useHistorial from '../hooks/useHistorial'
import { Link } from 'react-router-dom'

const Clima = () => {
  const { limpiarHistorial } = useHistorial()
  const clima = useClima()

  return (
    <div>
      <h1>Clima de: {clima?.nombre}</h1>
      {clima ? <ClimaDetalle clima={clima} /> : <p>Cargando...</p>}
      <Historial />
      <button><Link to='/'>Volver Atras</Link></button>
      <button onClick={limpiarHistorial}>Limpiar Historial</button>
    </div>
  )
}

export default Clima
