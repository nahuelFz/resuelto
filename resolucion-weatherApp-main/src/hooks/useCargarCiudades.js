import { useState, useEffect } from 'react'

const useCargarCiudades = () => {
  const [ciudades, setCiudades] = useState([])

  useEffect(() => {
    fetch('/datos.json')
      .then(response => response.json())
      .then(datos => {
        setCiudades(datos.ciudades)
      })
      .catch(error => console.error('Error al cargar el JSON:', error))
  }, [])

  return ciudades // Retornamos las ciudades cargadas
}

export default useCargarCiudades
