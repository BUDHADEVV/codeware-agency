// src/utils/services.js

import SeoImage from '/assets/services/seo1.png';
import PpcImage from '/assets/services/ppc1.png';
import SocialMediaImage from '/assets/services/smm1.png';
import ContentCreationImage from '/assets/services/content-creation2.png';
import EmailMarketingImage from '/assets/services/email-marketing1.png';
import AnalyticsImage from '/assets/services/analytics1.png';

export const servicesData = [
    {
        title: 'Web Development',
        description: 'Improve your website’s visibility on search engines with our SEO services.',
        image: SeoImage,
        backgroundColor: 'bg-[#F3F3F3]',
        foregroundColor: 'bg-primary',
        textColor: 'text-black',
    },
    {
        title: 'Performance Marketing',
        description: 'Boost your online presence with targeted PPC advertising campaigns.',
        image: PpcImage,
        backgroundColor: 'bg-primary',
        foregroundColor: 'bg-white',
        textColor: 'text-blue-900'
    },
    {
        title: 'Social Media Marketing',
        description: 'Engage your audience and grow your brand on social media platforms.',
        image: SocialMediaImage,
        backgroundColor: 'bg-black',
        foregroundColor: 'bg-primary',
        textColor: 'text-green-900'
    },
    {
        title: 'Content Creation',
        description: 'Create compelling content that drives engagement and conversions.',
        image: ContentCreationImage,
        backgroundColor: 'bg-red-100',
        foregroundColor: 'bg-red-500',
        textColor: 'text-red-900'
    },
    {
        title: 'Email Marketing',
        description: 'Reach your audience directly with targeted email campaigns and newsletters.',
        image: EmailMarketingImage,
        backgroundColor: 'bg-primary',
        foregroundColor: 'bg-white',
        textColor: 'text-blue-900'
    },
    {
        title: 'Analytics and tracking',
        description: 'Track and analyze your website’s performance to make data-driven decisions.',
        image: AnalyticsImage,
        backgroundColor: 'bg-black',
        foregroundColor: 'bg-primary',
        textColor: 'text-gray-900'
    }
];
