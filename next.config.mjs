/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/gsu-math-club' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/gsu-math-club' : '',
    trailingSlash: true,
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
};

export default nextConfig;