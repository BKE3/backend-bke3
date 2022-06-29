export async function getAllBirds(){
  const rawResponse = await fetch('http://localhost:7890/api/v1/birds');
  const data = await rawResponse.json();
  return data;
}