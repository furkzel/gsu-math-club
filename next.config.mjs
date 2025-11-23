/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    basePath: '/gsu-math-club',
    assetPrefix: '/gsu-math-club',
    trailingSlash: true,
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
};

export default nextConfig;