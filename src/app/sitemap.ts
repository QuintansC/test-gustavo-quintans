import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://test-gustavo-quintans-git-master-quintanscs-projects.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            alternates: {
                languages: {
                    en: 'https://acme.com/',
                },
            },
        },
        {
            url: 'https://test-gustavo-quintans-git-master-quintanscs-projects.vercel.app/about',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            alternates: {
                languages: {
                    en: 'https://acme.com/about',
                },
            },
        },
        {
            url: 'https://test-gustavo-quintans-git-master-quintanscs-projects.vercel.app/slideshow',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            alternates: {
                languages: {
                    en: 'https://acme.com/slideshow',
                },
            },
        },
        {
            url: 'https://test-gustavo-quintans-git-master-quintanscs-projects.vercel.app/timeline',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            alternates: {
                languages: {
                    en: 'https://acme.com/timeline',
                },
            },
        },
    ]
}