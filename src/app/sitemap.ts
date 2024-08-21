import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://test-gustavo-quintans-git-master-quintanscs-projects.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://test-gustavo-quintans-git-master-quintanscs-projects.vercel.app/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://test-gustavo-quintans-git-master-quintanscs-projects.vercel.app/blog',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ]
}