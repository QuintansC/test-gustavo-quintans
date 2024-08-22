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
                    en: 'https://test-gustavo-quintans-git-master-quintanscs-projects.vercel.app/',
                },
            },
        }
       
    ]
}