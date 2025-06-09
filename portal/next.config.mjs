/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'erggnosawkifegvaeucz.supabase.co',
          pathname: '/storage/v1/object/public/chat-files/**',
        },
      ],
    },
  };
  
  export default nextConfig;
