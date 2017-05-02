export async function fetchData(url) {
  const response = await fetch(url, {
    method: 'GET',
    header: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  return await response.json();
}
