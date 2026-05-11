const isGithubPages = process.env.GITHUB_ACTIONS === 'true'
const repoName = 'site-teragone-factory-V2'

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
