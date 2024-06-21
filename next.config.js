/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                destination: '/api/apple-app-site-association',
            },
        ];
    },
};

module.exports = nextConfig;
