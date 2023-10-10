import { getAllStarships } from "../../services/sw-api"
import NavBar  from "../../components/NavBar/NavBar"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import './StarshipList.css'


const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starships = await getAllStarships()
      setStarshipList(starships.results)
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h1>Loading scary starships...</h1>

  return (
    <>
    <h1>Starship List (OMG SCARY)</h1>
    <NavBar title={'STAR WARS STARSHIPS'}/>

    <main className="starship-container">  
      {starshipList.map((starship, idx) =>
        <div className="starship-link" key={idx}>
          <Link to={`/starships/${idx}`}>{starship.name}</Link>
        </div>  
      )}
    </main>
    </>
  )
}

export default StarshipList