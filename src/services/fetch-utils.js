export async function getAllBirds(){
  const rawResponse = await fetch('http://localhost:7890/api/v1/birds');
  const data = await rawResponse.json();
  return data;
}

export async function getBirdById(id){
  const rawResponse = await fetch(`http://localhost:7890/api/v1/birds/${id}`);
  const data = await rawResponse.json();
  return data;
}