const baseUrl = 'https://swapi.dev/api'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships/`)
  return res.json()
}

export async function getStarship(starshipsId) {
  const res = await fetch(`${baseUrl}/starships/${starshipsId}`)
  return res.json()
}
