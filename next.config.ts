import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  // This tells Next.js to skip the ESLint check during the build process
  eslint: {
    ignoreDuringBuilds: true,
  },
};
 
const withNextIntl = createNextIntlPlugin();
 
export default withNextIntl(nextConfig);