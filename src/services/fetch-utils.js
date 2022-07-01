export async function getAllBirds() {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/birds`);
  const data = await rawResponse.json();
  console.log(data);
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
export async function deleteBird(id) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/birds/delete/${id}`, {
    method: 'DELETE',
  });
  const data = await rawResponse.json();
  return data;
}

export async function getUser(id) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/${id}`, {
    method: 'GET',
  });
  const data = await rawResponse.json();
  return data;
}

export async function signUpUser(email, password) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = await rawResponse.json();
  return data;
}

export async function signInUser() {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/sessions`, {
    method: 'POST',
  });
  const data = await rawResponse.json();
  return data;
}

export async function signOut() {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/sessions`, {
    method: 'DELETE',
  });
  const data = await rawResponse.json();
  return data;
}
