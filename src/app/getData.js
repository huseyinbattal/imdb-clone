const API_KEY = process.env.API_KEY;
export async function getData() {
    return   (await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`).then(response => response.json()))
  }