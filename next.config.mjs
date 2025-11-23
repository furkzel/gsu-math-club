/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    basePath: '',
    trailingSlash: true,
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
};

export default nextConfig;
