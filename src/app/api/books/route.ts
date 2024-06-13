export async function GET() {
    const res = await fetch('https://freetestapi.com/api/v1/books', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
   
    return Response.json( data )
}