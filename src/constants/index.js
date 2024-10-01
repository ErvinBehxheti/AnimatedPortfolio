export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Neural Blogging',
    desc: 'This project is a Progressive Web App (PWA) designed to provide a seamless native app experience on mobile devices. It leverages ChatGPT and web APIs to assist users in creating blog posts. When a new blog post is published, all registered devices with notifications enabled will receive a notification, ensuring users stay updated with the latest content. The app combines the accessibility of a website with the functionality and engagement of a native application. For the moment I have disabled the notification feature',
    subdesc:
      'A Progressive Web App (PWA) that allows users to write their own articles with the help of AI-based autosuggestions powered by ChatGPT. Additionally, it features a chatbot with the personality of Dumbledore, where users can ask questions and receive insightful answers.',
    href: 'https://neural-blogging.vercel.app',
    texture: '/textures/project/neural-blogging.mp4',
    logo: '/assets/neural-blogging.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 0,
        name: 'NextJS',
        path: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Kosherja (BeeHive)',
    desc: 'This project is a user management platform with a modern UI/UX. Admins sign up with token-based authentication and use these tokens to scrape LinkedIn profiles for public information, including emails. They can then contact these users, manage them on a dedicated page, and store all scraped data. Additionally, the platform allows admins to download user data in Excel format.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Cheerio for Scraping. Kosherja is designed for optimal performance and high traffic requests.',
    texture: '/textures/project/kosherja.mp4',
    logo: '/assets/kosherja-logo.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 0,
        name: 'NextJS',
        path: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Cheerio',
        path: 'https://cheerio.js.org/img/orange-c.svg',
      },
    ],
  },
  {
    title: 'DigitalLove - ECommerce Store',
    desc: 'This project is a streamlined eCommerce platform built with Next.js, Sanity, and Stripe. It features a user-friendly interface where customers can browse products, view detailed descriptions, and make secure purchases. Sanity handles content management, allowing for easy updates to product listings and site content. Stripe integrates for seamless payment processing, supporting various payment methods and ensuring secure transactions. The platform provides a smooth shopping experience with fast loading times and responsive design, optimized for both desktop and mobile devices.',
    subdesc: 'A simple eCommerce site using Next.js, Sanity for content management, and Stripe for secure payments.',
    href: 'https://next-typescript-ecommerce-sanity-stripe-wggq.vercel.app/',
    texture: '/textures/project/digital-love.mp4',
    logo: 'https://avatars.githubusercontent.com/u/108547162?s=200&v=4',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 0,
        name: 'NextJS',
        path: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 5,
        name: 'Sanity',
        path: 'https://cdn.sanity.io/images/o0o2tn5x/production/eb0843b1adb22478e8f30d7fe89b377ebc6d5e85-280x280.png',
      },
      {
        id: 6,
        name: 'Stripe',
        path: 'https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=3840&q=90&fm=webp',
      },
    ],
  },
  {
    title: 'PriceSeer',
    desc: "Using Next.js Server Actions, I created a web scraper that collects product information from the Amazon website and adds it to PriceSeer, a price-tracking platform. The scraper efficiently retrieves data such as product prices, descriptions, and availability. To enhance user experience, I also implemented cron jobs that run at scheduled intervals, automatically notifying subscribers whenever there are changes to the product's price or other key details. This ensures users are kept informed in real-time, allowing them to act on price fluctuations or product updates quickly. (SCRAPING NOT WORKING MOMENTARILY)",
    subdesc:
      'Scraping website with cron job implementation fully utilizing the back end power of Next.js',
    href: 'https://priceseer.vercel.app/',
    texture: '/textures/project/priceseer.mp4',
    logo: 'https://priceseer.vercel.app/assets/icons/logo.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 0,
        name: 'NextJS',
        path: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Cheerio',
        path: 'https://cheerio.js.org/img/orange-c.svg',
      },
    ],
  },
  {
    title: 'TikTik - Social Media App',
    desc: 'The website is a TikTok clone built using modern web development technologies, providing a seamless and engaging experience for users. Developed with Next.js, the site ensures fast server-side rendering and optimized performance. Tailwind CSS is used to create a sleek, responsive, and mobile-friendly user interface, giving the platform a visually appealing design that works effortlessly across devices.Sanity.io powers the backend, allowing for efficient content management and dynamic video uploads. The integration of Google authentication simplifies the login process, offering users a secure and frictionless way to sign in or create accounts. Search filters are implemented to help users discover content easily, enhancing the browsing experience.The file structure of the application is well-organized, promoting scalability and maintainability.',
    subdesc: '',
    href: 'https://tiktik-03.vercel.app/',
    texture: '/textures/project/tiktik.mp4',
    logo: 'https://www.freepnglogos.com/uploads/camera-logo-png/photography-clipart-camera-logo-pencil-color-6.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 0,
        name: 'NextJS',
        path: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'Sanity',
        path: 'https://cdn.sanity.io/images/o0o2tn5x/production/eb0843b1adb22478e8f30d7fe89b377ebc6d5e85-280x280.png',
      },
    ],
  },
  {
    title: 'Admin Dashboard',
    desc: 'This advanced dashboard provides a comprehensive suite of tools for efficient data management and visualization. It includes interactive graphs for data analysis, Kanban boards for task management, and to-do lists for tracking progress. Users can customize their experience with color pickers and manage data through dynamic tables. The dashboard is designed for versatility, offering a robust and intuitive interface to handle a wide range of features and functionalities seamlessly.',
    subdesc: 'Built with React and Syncfusion components for data management and visualization.',
    href: 'https://react-typescript-syncfusion-dashboard.vercel.app/',
    texture: '/textures/project/admin-dashboard.mp4',
    logo: 'https://cdn-icons-png.flaticon.com/512/6820/6820898.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Attributy',
    pos: 'Front-End Developer',
    duration: 'September 2022 - June 2024',
    bulletPoints: [
      '● Developed an interactive data visualization dashboard that provided real-time insights, empowering clients to make informed business decisions and increasing client satisfaction.',
      '● Implemented Server-side Rendering (SSR), boosting page load speed by 30% and significantly enhancing SEO, which led to higher search engine rankings and increased web traffic.',
      '● Optimized website algorithms and performance, improving the efficiency of key processes by up to 80%, resulting in faster load times and a better user experience.',
      '● Led a front-end optimization initiative, which reduced bounce rates by 25% and improved user engagement through a more responsive and user-friendly interface.',
    ],
    title:
      'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
    icon: 'https://media.licdn.com/dms/image/v2/D4D0BAQFA7Esi-vRZwA/company-logo_200_200/company-logo_200_200/0/1708595910562/attributy_logo?e=2147483647&v=beta&t=QhAdkZO5w-j2RzYmN9dydivBL5hjtD58t7Br5xrxcLo',
    animation: 'clapping',
  },
];
