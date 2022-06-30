export async function getAllBirds() {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/birds`);
  const data = await rawResponse.json();
  return data;
}

export async function getBirdById(id) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/birds/${id}`);
  const data = await rawResponse.json();
  return data;
}

export async function createBird(bird) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/birds/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bird),
  });
  const data = await rawResponse.json();
  return data;
}

export async function updateBird(id, bird) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/birds/update/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bird),
  });
  const data = await rawResponse.json();
  return data;
}
//method, headers, body
