/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.githubassets.com',
                port: '',
                pathname: '/assets/**'
            },
            {
                protocol: 'https',
                hostname: 'content.linkedin.com',
                port: '',
                pathname: '/content/**'
            },
        ]
    },
};

export default nextConfig;
