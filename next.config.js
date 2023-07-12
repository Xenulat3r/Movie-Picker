/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['image.tmdb.org','www.gravatar.com']
  },
 
skipMiddlewareUrlNormalize: true,
env:{
  // AUTH:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkzOTVlMjUwMzViNDdiN2RlZDNmZDVhOGRiYjhiYyIsInN1YiI6IjYyZWQ5OGI0N2Q1NTA0MDA3YmI2NGQ4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._hIns-0CEgnfXu03uYgfEyy3gWhg5quT5YHE92A2Tyc',

  // API:'5d9395e25035b47b7ded3fd5a8dbb8bc',

  // URL:'https://movie--picker.vercel.app/'

  AUTH:process.env.AUTH,
  API:process.env.API,
  URL:process.env.URL
}

  
}

module.exports = nextConfig


