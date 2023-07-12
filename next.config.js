/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['image.tmdb.org','www.gravatar.com']
  },
 
skipMiddlewareUrlNormalize: true,
env:{
  AUTH:process.env.AUTH,
  API:process.env.API,
  URL:process.env.URL
}

  
}

module.exports = nextConfig


