import type { IProjectData } from '../components/Project'

export const projects: IProjectData[] = [
  {
    name: 'Virtual Keyboard',
    description: 'Assignment from school: Create a virtual keyboard using plain JavaScript.',
    image: 'vkeyboard.webp',
    stack: ['JS'],
    demo: 'https://tnikolay.github.io/virtual-keyboard/',
    src: 'https://github.com/TNikolay/virtual-keyboard/tree/development',
  },
  {
    name: 'Minesweeper',
    description: 'Assignment from school: Develop a replica of the well-known game Minesweeper.',
    image: 'minesweeper.webp',
    stack: ['JS'],
    demo: 'https://rolling-scopes-school.github.io/tnikolay-JSFE2023Q1/minesweeper/',
  },
  {
    name: 'CSS Diner',
    description: 'Assignment for school: Replicate the CSS Diner game, which can be found at https://flukeout.github.io/',
    image: 'cssdiner.webp',
    stack: ['TS', 'Vite', 'SCSS'],
    demo: 'https://rolling-scopes-school.github.io/tnikolay-JSFE2023Q1/rs-css/',
  },
  {
    name: 'ECommerce Application',
    description: 'The final project for the frontend course is not fully functional due to the trial period for commercetools.com coming to an end. It was developed by a team of three students.',
    image: 'ecommerce.webp',
    stack: ['React', 'RTK', 'TS', 'MUI', 'Commercetools'],
    //    demo: 'https://ikk-shop.netlify.app/',
    src: 'https://github.com/Irina0313/eCommerce-Application',
  },
  {
    name: 'Rick and Morty',
    description: 'Assignment for school: develop a website to search for and showcase information from a public API.',
    image: 'rickandmonty.webp',
    stack: ['React', 'TS', 'React Router', 'RTK Query', 'Tailwind', 'Vitest'],
    demo: 'https://tnikolay.github.io/RSSReact2023Q4/',
    src: 'https://github.com/TNikolay/RSSReact2023Q4/pull/4',
  },
  {
    name: 'GraphQL Application',
    description: 'Final task for the React course. It was developed by a team of three students.',
    image: 'graphql.webp',
    stack: ['Next', 'RTK', 'TS', 'Chakra UI', 'Supabase', 'Vitest', 'GraphQL'],
    demo: 'https://previous-graphql.netlify.app/',
    src: 'https://github.com/TNikolay/graphiql-app',
  },
  {
    name: 'BrickShooter clone',
    description: 'Currently in development, I am working on a pet project which is a clone of my favorite match-3 game.',
    image: 'brickshooter.webp',
    stack: ['React', 'RTK', 'TS', 'Tailwind'],
    demo: 'http://brickshooterclone.begemotov.net/',
  },
  {
    name: 'This portfolio',
    image: '',
    stack: ['Astro', 'React', 'TS', 'Tailwind', 'Shadcn', 'Framer Motion'],
    demo: '',
    src: 'https://github.com/TNikolay/portfolio',
  },
  {
    name: 'Neoflex Invite Test',
    description: 'Just a test task',
    image: 'neoflex-invite-test.webp',
    stack: ['React', 'React Router', 'TS', 'Zustand', 'Tailwind', 'Shadcn'],
    demo: 'https://tnikolay.github.io/Neoflex-Invite-Test/',
    src: 'https://github.com/TNikolay/Neoflex-Invite-Test',
  },
  {
    name: 'Softvoile.com',
    description: 'Main page of my virtual company - softvoile.com', 
    image: 'softvoile.webp',
    stack: ['Next', 'TS', 'Tailwind', 'Shadcn', 'Framer Motion', 'VPS', 'Docker', 'API'],  
    demo: 'http://softvoile.com/',
  },
  {
    name: 'Clipdiary.com',
    description: 'Web site for my product - Clipdiary - Clipboard Manager',
    image: 'clipdiary.webp',
    stack: ['Next', 'TS', 'Tailwind', 'Shadcn', 'Framer Motion', 'VPS', 'Docker'],  
    demo: 'http://clipdiary.com/',
  },
  {
    name: 'Flashpaste.com',
    description: 'Web site for my other product - Flashpaste',
    image: 'flashpaste.webp',
    stack: ['Next', 'TS', 'Tailwind', 'Shadcn', 'Framer Motion', 'VPS', 'Docker'],  
    demo: 'http://flashpaste.com/',
  },

  // {
  //   name: '',
  //   description: '',
  //   image: '',
  //   stack: ['React'],
  //   demo: '',
  //   src: '',
  // },
]
