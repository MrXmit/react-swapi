import { getAllStarships } from "../../services/sw-api"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

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
    <main className="starship-list">
      <h1>Starship List (OMG SCARY)</h1>
      {starshipList.map((starship, idx) =>
        <div className="link-container" key={idx}>
          <Link to={`/starships/${idx}`}>{starship.name}</Link>
        </div>  
      )}
    </main>
  )
}

export default StarshipList