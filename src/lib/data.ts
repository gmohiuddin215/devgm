export const socialLinks = {
    github: 'https://github.com/gmohiuddin215',
    linkedin: 'https://linkedin.com/in/mohiuddin2398',
    email: 'mailto:g.mohiuddin215@gmail.com',
    fiverr: 'https://www.fiverr.com/s/DBkkdrP',
    upwork: 'https://www.upwork.com/freelancers/~016d7a9c811354e794'
};

export const experience = [
    {
        role: 'Senior iOS Developer',
        company: 'iParagons Tech',
        duration: '2021 - Present',
        description: 'Expert in Swift, SwiftUI, Combine, SceneKit, RealityKit, SiriKit, WidgetKit, In-App Purchases, Action Button, Backend, REST APIs, ChatGPT API.',
        technologies: ['Swift', 'SwiftUI', 'Combine', 'SceneKit', 'RealityKit']
    }
];

export const skills = [
    { name: 'Swift & SwiftUI', level: 'Expert' },
    { name: 'Combine', level: 'Expert' },
    { name: 'SceneKit & RealityKit', level: 'Expert' },
    { name: 'SiriKit & WidgetKit', level: 'Expert' },
    { name: 'In-App Purchases', level: 'Expert' },
    { name: 'Backend & REST APIs', level: 'Expert' },
    { name: 'ChatGPT API', level: 'Expert' },
    { name: 'Action Button', level: 'Expert' }
];

export const projects = [
    {
        slug: 'invoza',
        title: 'Invoza – Invoice Maker',
        description: 'A professional invoicing and estimates app with beautiful UI, PDF export, and multi-currency support.',
        detailedDescription: `Invoza is a comprehensive invoicing app built for freelancers and small businesses. 
I designed and developed the entire iOS app using SwiftUI, implementing features such as invoice and estimate creation, 
PDF generation and export, multi-currency support, client management, and customizable invoice templates. 
The app features a clean, intuitive interface that makes billing effortless, with support for recurring invoices, 
payment tracking, and detailed financial reports. Built with a focus on user experience, reliability, and professional presentation.`,
        technologies: ['SwiftUI', 'PDF Generation', 'Core Data', 'CloudKit', 'In-App Purchases'],
        screenshots: [
            'https://placehold.co/1170x2532/teal/white?text=Invoza+Home',
            'https://placehold.co/1170x2532/teal/white?text=Invoza+Invoice',
            'https://placehold.co/1170x2532/teal/white?text=Invoza+Clients',
            'https://placehold.co/1170x2532/teal/white?text=Invoza+Reports'
        ],
        appStoreUrl: 'https://apps.apple.com/us/app/invoza-invoice-maker/id6756181651',
        github: '#',
        demo: '#'
    },
    {
        slug: 'leaf',
        title: 'Leaf – Social Calendar App',
        description: 'Redesigned and modernized a legacy UIKit app into SwiftUI, optimizing performance and improving architecture.',
        detailedDescription: `Leaf is a social calendar app that required a complete modernization of its legacy UIKit codebase. 
I migrated large parts of the UI to SwiftUI, restructured the architecture following MVVM, eliminated memory leaks, and 
significantly improved rendering performance. 
I also implemented new features such as AI-powered text understanding using OpenAI, real-time updates, and smoother 
navigation flows. The result was an app that performed faster, was easier to maintain, and offered a much more intuitive user experience.`,
        technologies: ['SwiftUI', 'UIKit', 'OpenAI', 'Memory Management', 'MVVM'],
        screenshots: [
            'https://placehold.co/1170x2532/orange/white?text=Leaf+Home',
            'https://placehold.co/1170x2532/orange/white?text=Leaf+Calendar',
            'https://placehold.co/1170x2532/orange/white?text=Leaf+Events',
            'https://placehold.co/1170x2532/orange/white?text=Leaf+Settings'
        ],
        appStoreUrl: 'https://apps.apple.com/us/app/leaf-build-your-community/id1040588046',
        github: '#',
        demo: '#'
    },
    {
        slug: 'ai-smart-reminder',
        title: 'AI Smart Reminder App',
        description: 'Developed a smart reminders app with In-App Purchases, Timeline animations, Siri, Widgets, and OpenAI.',
        detailedDescription: `I built a fully-featured smart reminder app enabling users to create tasks manually or through AI-powered commands. 
I integrated In-App Purchases, added WidgetKit support, SiriKit voice commands, Action Button shortcuts, and 
implemented a Timeline interface with animations. 
I also built the backend and implemented OpenAI-driven natural language task creation. 
The project focused heavily on user experience, speed, and reliability.`,
        technologies: ['SwiftUI', 'OpenAI', 'In-App Purchases', 'WidgetKit', 'SiriKit', 'Action Button'],
        screenshots: [
            'https://placehold.co/1170x2532/orange/white?text=Smart+Reminder+Home',
            'https://placehold.co/1170x2532/orange/white?text=Smart+Reminder+List',
            'https://placehold.co/1170x2532/orange/white?text=Smart+Reminder+AI',
            'https://placehold.co/1170x2532/orange/white?text=Smart+Reminder+Settings'
        ],
        appStoreUrl: 'https://apps.apple.com/us/app/ai-smart-reminder/id6747449550',
        github: '#',
        demo: '#'
    },
    {
        slug: 'peace-of-mind',
        title: 'Child Minder Safer Child App',
        description: 'Real-time motion tracking app using Core Motion, push notifications, and background activity monitoring.',
        detailedDescription: `Peace of Mind is a child movement safety app designed for parents. 
Using Core Motion and CMMotionActivityManager, I built a real-time motion tracking system that detects dangerous 
movement patterns and sends alerts. 
I designed a background activity monitoring flow, integrated APNs for safety notifications, and improved battery usage. 
The experience required deep understanding of motion APIs, background modes, and performance constraints.`,
        technologies: ['CoreMotion', 'CMMotionActivityManager', 'Push Notifications', 'Background Modes', 'iOS Architecture'],
        screenshots: [
            'https://placehold.co/1170x2532/orange/white?text=Peace+of+Mind+Home',
            'https://placehold.co/1170x2532/orange/white?text=Peace+of+Mind+Map',
            'https://placehold.co/1170x2532/orange/white?text=Peace+of+Mind+Alerts',
            'https://placehold.co/1170x2532/orange/white?text=Peace+of+Mind+Settings'
        ],
        appStoreUrl: 'https://apps.apple.com/us/app/child-minder-safer-child-app/id1597459223',
        github: '#',
        demo: '#'
    },
    {
        slug: 'multiroom',
        title: 'Multiroom – Room Scanning App',
        description: 'Implemented advanced room scanning using RoomPlan with SceneKit & RealityKit visualizations.',
        detailedDescription: `I built an app using Apple's RoomPlan API to scan rooms and generate accurate 3D and 2D models. 
I integrated SceneKit and RealityKit to display models interactively and added a custom workflow for marking damaged 
areas on walls and ceilings. 
These areas were visualized in both 2D and 3D models, helping users identify and document structural issues.`,
        technologies: ['SwiftUI', 'RoomPlan', 'SceneKit', 'RealityKit'],
        screenshots: [
            'https://placehold.co/1170x2532/orange/white?text=Multiroom+Scan',
            'https://placehold.co/1170x2532/orange/white?text=Multiroom+Model',
            'https://placehold.co/1170x2532/orange/white?text=Multiroom+Edit',
            'https://placehold.co/1170x2532/orange/white?text=Multiroom+Export'
        ],
        github: '#',
        demo: '#'
    },
    {
        slug: 'viflux',
        title: 'Viflux – 3D Object Scanning',
        description: 'Created a 3D object scanning app that exports USDZ models and supports backend uploads.',
        detailedDescription: `For Viflux, I created a lightweight 3D scanning app allowing users to scan physical objects and export them as USDZ models. 
I implemented image and model uploads to a backend using custom PHP endpoints with live progress tracking. 
The app focused on accuracy, simplicity, and reliability for users needing quick 3D digitization.`,
        technologies: ['SwiftUI', 'RealityKit', 'Object Capture', '3D Scanning', 'PHP Backend', 'USDZ', 'Networking'],
        screenshots: [
            'https://placehold.co/1170x2532/orange/white?text=Viflux+Scan',
            'https://placehold.co/1170x2532/orange/white?text=Viflux+Upload',
            'https://placehold.co/1170x2532/orange/white?text=Viflux+Gallery',
            'https://placehold.co/1170x2532/orange/white?text=Viflux+Profile'
        ],
        github: '#',
        demo: '#'
    },
    {
        slug: 'mimic-me',
        title: 'Mimic.me – AI Image Generation App',
        description: 'Built an AI-based image generation app using Stable Diffusion and advanced UI workflows.',
        detailedDescription: `Mimic.me allows users to generate stylized images using Stable Diffusion. 
I developed the entire iOS app, designed the UI in SwiftUI, handled model uploads, managed AI prompts, 
and optimized images for performance. 
The app focused on delivering fast generation times, beautiful design, and user-friendly controls.`,
        technologies: ['SwiftUI', 'Stable Diffusion', 'Backend APIs', 'AI Image Generation'],
        screenshots: [
            'https://placehold.co/1170x2532/orange/white?text=Mimic+Generate',
            'https://placehold.co/1170x2532/orange/white?text=Mimic+Gallery',
            'https://placehold.co/1170x2532/orange/white?text=Mimic+Edit',
            'https://placehold.co/1170x2532/orange/white?text=Mimic+Share'
        ],
        appStoreUrl: 'https://apps.apple.com/us/app/mimic-me/id6480029254',
        github: '#',
        demo: '#'
    }
];

export const reviews = [
    {
        name: 'Henriette Novak',
        role: 'Founder',
        company: 'AI Smart Reminder',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Mohiuddin truly impressed with his exceptional professionalism and coding expertise, ensuring a bug-free experience. His deep understanding and puntual delivery made working with him a breeze, and his fluent communication was the icing on the cake. 👏'
    },
    {
        name: 'David Chen',
        role: 'CTO',
        company: 'StartUp Vision',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        text: 'Working with Ghulam was a pleasure. He delivered the AI Smart Reminder app ahead of schedule and the code quality was top-notch. He truly understands how to build scalable iOS architectures.'
    },
    {
        name: 'Sebastian',
        role: 'Founder',
        company: 'Viflux.com',
        image: 'https://randomuser.me/api/portraits/men/68.jpg',
        text: 'This was my first experience working with iOS developer, and it turned out to be very positive. He was able to effectively solve the issues and bugs that came up throughout the project. He was always available and willing to fix the things quickly. I would recommend him.'
    },
    {
        name: 'Paul Greaves',
        role: 'Founder',
        company: 'Fixzy',
        image: 'https://randomuser.me/api/portraits/men/78.jpg',
        text: 'Mohiuddin is a true professional. He delivered the app on time and with high quality. He is a great communicator and always available to help. I would recommend him.'
    }
];
