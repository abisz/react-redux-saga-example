export async function fetchData(url) {
  const response = await fetch(url, {
    method: 'GET',
    header: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  console.log(response);


  return await response.json();
}