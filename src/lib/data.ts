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
    { name: 'SwiftData', level: 'Expert' },
    { name: 'MVVM & VIPER Architecture', level: 'Expert' },
    { name: 'PDFKit', level: 'Expert' },
    { name: 'In-App Purchases', level: 'Expert' },
    { name: 'Backend & REST APIs', level: 'Expert' },
    { name: 'AI Integration', level: 'Expert' },
    { name: 'Action Button', level: 'Expert' }
];

export const projects = [
    {
        slug: 'invoza',
        title: 'Invoza',
        description: 'A professional invoicing and estimates app with beautiful UI, PDF export, and multi-currency support.',
        detailedDescription: `Invoza is a comprehensive invoicing app built for freelancers and small businesses. 
I designed and developed the entire iOS app using SwiftUI, implementing features such as invoice and estimate creation, 
PDF generation and export, multi-currency support, client management, and customizable invoice templates. 
The app features a clean, intuitive interface that makes billing effortless, with support for recurring invoices, 
payment tracking, and detailed financial reports. Built with a focus on user experience, reliability, and professional presentation.`,
        technologies: ['Swift', 'SwiftUI', 'PDFKit', 'SwiftData', 'VIPER', 'In-App Purchases', 'Adapty'],
        screenshots: [
            'invoza/img_1.PNG',
            'invoza/img_2.PNG',
            'invoza/img_3.PNG',
            'invoza/img_4.PNG'
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
        technologies: ['Swift', 'SwiftUI', 'UIKit', 'OpenAI', 'MVVM', 'Parse', 'Firebase', 'SPM'],
        screenshots: [
            'leaf/img_1.PNG',
            'leaf/img_2.PNG',
            'leaf/img_3.PNG',
            'leaf/img_4.PNG',
            'leaf/img_5.PNG'
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
        technologies: ['Swift', 'SwiftUI', 'OpenAI', 'In-App Purchases', 'WidgetKit', 'SiriKit', 'Action Button'],
        screenshots: [
            'aismartreminder/img_1.PNG',
            'aismartreminder/img_2.PNG',
            'aismartreminder/img_3.PNG',
            'aismartreminder/img_4.PNG',
            'aismartreminder/img_5.PNG',
            'aismartreminder/img_6.PNG',
            'aismartreminder/img_7.PNG'
        ],
        appStoreUrl: 'https://apps.apple.com/us/app/ai-smart-reminder/id6747449550',
        github: '#',
        demo: '#'
    },
    {
        slug: 'multiroom',
        title: 'Multiroom',
        description: 'Implemented advanced room scanning using RoomPlan with SceneKit & RealityKit visualizations.',
        detailedDescription: `I built an app using Apple's RoomPlan API to scan rooms and generate accurate 3D and 2D models. 
I integrated SceneKit and RealityKit to display models interactively and added a custom workflow for marking damaged 
areas on walls and ceilings. 
These areas were visualized in both 2D and 3D models, helping users identify and document structural issues.`,
        technologies: ['Swift', 'SwiftUI', 'RoomPlan', 'SceneKit', 'RealityKit', 'ARKit', 'MVVM'],
        screenshots: [
            'multiroom/img_1.PNG',
            'multiroom/img_2.PNG',
            'multiroom/img_3.PNG',
            'multiroom/img_4.PNG',
            'multiroom/img_5.PNG',
            'multiroom/img_6.PNG',
            'multiroom/img_7.PNG',
            'multiroom/img_8.PNG',
            'multiroom/img_9.PNG'
        ],
        github: '#',
        demo: '#'
    },
//     {
//         slug: 'viflux',
//         title: 'Viflux',
//         description: 'Created a 3D object scanning app that exports USDZ models and supports backend uploads.',
//         detailedDescription: `For Viflux, I created a lightweight 3D scanning app allowing users to scan physical objects and export them as USDZ models. 
// I implemented image and model uploads to a backend using custom PHP endpoints with live progress tracking. 
// The app focused on accuracy, simplicity, and reliability for users needing quick 3D digitization.`,
//         technologies: ['Swift', 'SwiftUI', 'RealityKit', 'Object Capture', '3D Scanning', 'PHP Backend', 'USDZ', 'Networking'],
//         screenshots: [
//             'https://placehold.co/1170x2532/orange/white?text=Viflux+Scan',
//             'https://placehold.co/1170x2532/orange/white?text=Viflux+Upload',
//             'https://placehold.co/1170x2532/orange/white?text=Viflux+Gallery',
//             'https://placehold.co/1170x2532/orange/white?text=Viflux+Profile'
//         ],
//         github: '#',
//         demo: '#'
//     },
    {
        slug: 'mimic-me',
        title: 'Mimic.me',
        description: 'Built an AI-based image generation app using Stable Diffusion and advanced UI workflows.',
        detailedDescription: `Mimic.me allows users to generate stylized images using Stable Diffusion. 
I developed the entire iOS app, designed the UI in SwiftUI, handled model uploads, managed AI prompts, 
and optimized images for performance. 
The app focused on delivering fast generation times, beautiful design, and user-friendly controls.`,
        technologies: ['Swift', 'SwiftUI', 'Stable Diffusion', 'Firebase', 'RunPod'],
        screenshots: [
            'mimic/img_1.PNG',
            'mimic/img_2.PNG',
            'mimic/img_3.PNG',
            'mimic/img_4.PNG',
            'mimic/img_5.PNG'
        ],
        appStoreUrl: 'https://apps.apple.com/us/app/mimic-me/id6480029254',
        github: '#',
        demo: '#'
    },
    {
        slug: 'puremetric',
        title: 'PureMetric',
        description: 'A simple and precise macro tracker with manual entry, instant calculations, and clean daily reports.',
        detailedDescription: `PureMetric is a streamlined macro tracking app designed for users who want simplicity without sacrificing precision. 
I built the entire iOS app using SwiftUI with a focus on clean, intuitive design. 
The app features manual food entry, instant macro calculations, and beautiful daily reports — all without databases or clutter. 
Perfect for users who want full control over their nutrition tracking with a lightweight, no-nonsense approach.`,
        technologies: ['Swift', 'SwiftUI', 'SwiftData', 'MVVM', 'Charts'],
        screenshots: [
            'puremetric/img_1.PNG',
            'puremetric/img_2.PNG',
            'puremetric/img_3.PNG'
        ],
        github: '#',
        demo: '#'
    },
    {
        slug: 'slyai',
        title: 'Sly AI',
        description: 'An AI-powered app for creating funny prank images and videos with advanced generation capabilities.',
        detailedDescription: `SlyAI is an entertaining AI-powered app designed for creating hilarious prank images and videos. 
I developed the complete iOS application using SwiftUI, integrating advanced AI image and video generation APIs. 
The app allows users to easily create convincing prank content with intuitive controls and fast generation times. 
Built with a focus on fun user experience and seamless content creation workflows.`,
        technologies: ['Swift', 'SwiftUI', 'Gemini', 'MVVM', 'FastAPI', 'Python', 'Supabase'],
        screenshots: [
            'slyai/img_1.PNG',
            'slyai/img_2.PNG',
            'slyai/img_3.PNG',
            'slyai/img_4.PNG'
        ],
        github: '#',
        demo: '#'
    },
    {
        slug: 'darkfinder',
        title: 'Dark Finder',
        description: 'A powerful search tool for finding publicly available information about people online.',
        detailedDescription: `Dark Finder is an OSINT (Open Source Intelligence) tool that helps users find publicly available information about people online. 
I built the iOS app with SwiftUI, integrating multiple search APIs and data aggregation services. 
The app can discover social media profiles, images, phone numbers, location data, and other publicly accessible information. 
Designed with a sleek dark interface and powerful search capabilities, it provides comprehensive results from various online sources.`,
        technologies: ['Swift', 'SwiftUI', 'REST APIs', 'Gemini', 'Firebase', 'MVVM', 'NodeJS'],
        screenshots: [
            'darkfinder/img_1.PNG',
            'darkfinder/img_2.PNG',
            'darkfinder/img_3.PNG',
            'darkfinder/img_4.PNG',
            'darkfinder/img_5.PNG',
            'darkfinder/img_6.PNG',
            'darkfinder/img_7.PNG',
            'darkfinder/img_8.PNG',
            'darkfinder/img_9.PNG',
            'darkfinder/img_10.PNG'
        ],
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
