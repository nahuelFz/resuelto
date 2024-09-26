import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useCargarCiudades from '../hooks/useCargarCiudades'

const useClima = () => {
  const [clima, setClima] = useState(null)
  const { id } = useParams()
  const ciudades = useCargarCiudades()

  useEffect(() => {
    setClima(ciudades.find(ciudad => ciudad.id === parseInt(id)))
  }, [ciudades, id])

  return clima
}

export default useClima
