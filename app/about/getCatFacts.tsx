import 'server-only'
async function getData() {
  console.log('nikos getData');
  const res = await fetch('https://cat-fact.herokuapp.com/facts/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function GetCatFacts() {
  const data = await getData()
  console.log('nikos getData outer');
  return <main>
    <div>{data.map((fact: { _id: string, text: string }) => {
      return <li key={fact._id}>{fact.text}</li>;
    })}</div>
  </main>
}
