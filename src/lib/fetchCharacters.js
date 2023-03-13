export const getDataCharacters = (params) =>
  fetch(`https://dunder-mifflin-api.vercel.app/api/characters/all?${params}`)
  .then((response) => response.json())

export const getAllDataCharacter = (name) =>
  fetch(`https://dunder-mifflin-api.vercel.app/api/characters/one?find=${name}`)
  .then((response) => response.json())
  .then((data) => data[0])
