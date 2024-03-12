/** @type {import('next').NextConfig} */
require("dotenv").config;

const nextConfig = {
  images: {
    domains: [
      "wallpapercave.com",
      "e1.pxfuel.com",
      "profiles.bugcrowdusercontent.com",
    ],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    APP_URL: process.env.APP_URL,
  },
};

module.exports = nextConfig;
