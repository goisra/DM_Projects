export const useFetch = () => {

  const getData = async(url) => {
    const request = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content Type': 'application/json',
        'Acces-Control-Allow-Origin': '*',
      })
    });
    if (!request.ok){
      return {
        error: true,
        message: 'Ocurrió un error'
      }
    }
    else{
      return{
        error: false,
        message: 'Respuesta exitosa',
        data: await request.json()
      }
    }
  }

  return {
    getData,
  }



  
}