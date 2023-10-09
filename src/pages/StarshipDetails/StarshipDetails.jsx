import { Link } from "react-router-dom"
import { getStarship } from "../../services/sw-api"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import NavBar  from "../../components/NavBar/NavBar"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  if (!starshipDetails.name) return <h1>Loading details...</h1>

  return (
    <main className='starship-details'>
      <NavBar title='Spaceship Details'/>
      <h2>NAME: {starshipDetails.name}</h2>
      <h3>MODEL: {starshipDetails.model}</h3>
      <Link to={'/'}> RETURN </Link>
    </main>
  )
}

export default StarshipDetails