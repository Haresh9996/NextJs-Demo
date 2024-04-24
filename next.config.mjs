/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    redirects:async()=>{
        return[
            {
                source: '/api/users',
                destination: '/productlist',
                permanent: false
            }
        ]
    }

};

export default nextConfig;
