export const getOneDataCharacters = (param) =>
  fetch(`https://dunder-mifflin-api.vercel.app/characters/all?${param}`)
  .then((response) => response.json())

export const getAllDataCharacter = (name) =>
  fetch(`https://dunder-mifflin-api.vercel.app/characters/one?find=${name}`)
  .then((response) => response.json())
  .then((data) => data[0])
