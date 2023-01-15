"use client"
import { Inter } from "@next/font/google";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Results from "components/Results";
import requests from "utils/requests";
import { use } from "react";

const API_KEY = process.env.API_KEY;
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = use(getData());
  console.log(data.results);
  const results = data.results;
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Results */}
      <Results results={results} />
    </div>
  );
}


// export async function getServerSideProps(context) {
  
//   const genre = context.query.genre || "fetchTrending"
//   const request = await fetch(`
//          https://api.themoviedb.org/3${requests[genre].url}
//   `).then(response => response.json());

//   return {
//     props: {
//       results: request.results
//     }
//   }
// }

async function getData() {
  return await (await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)).json()
}