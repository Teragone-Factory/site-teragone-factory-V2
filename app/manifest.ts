import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Teragone Factory',
    short_name: 'Teragone Factory',
    description:
      'Digital & AI Delivery Factory — AI Engineering, Web3 & Distributed Systems',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0F',
    theme_color: '#0A0A0F',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
