import { useNavigate } from 'react-router-dom'
import CiudadSelector from '../components/CiudadSelector'
import Historial from '../components/Historial'
import useHistorial from '../hooks/useHistorial'

const Home = () => {
  const navigate = useNavigate()
  const { agregarConsulta } = useHistorial()
  // Función que manejará el envío de la ciudad seleccionada
  const handleSeleccionarCiudad = (ciudad) => {
    // Navegar a la página de clima con el ID de la ciudad seleccionada
    agregarConsulta(ciudad)
    navigate(`clima/${ciudad.id}`)
  }

  return (
    <main>
      <h1>Consulta de Clima</h1>
      <CiudadSelector onSeleccionarCiudad={handleSeleccionarCiudad} />
      <Historial />
    </main>
  )
}

export default Home
