/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pkg-forum.suzanpradhan.com.np",
                port: "",
                pathname: "/media/**"
            }
        ]
    }
};

export default nextConfig;
