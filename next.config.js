/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'logosmarcas.net',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
        ],
    }
}

module.exports = nextConfig
