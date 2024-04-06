/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

// const nextConfig = {
//   output: 'export',
//   images: {
//     loader: 'custom',
//     loaderFile: './my-loader.ts',
//   }
// }

module.exports = nextConfig;
