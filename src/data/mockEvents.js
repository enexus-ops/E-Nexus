const generateEventId = () => Math.random().toString(36).substr(2, 9);

const upcomingEvents = [
  {
    id: generateEventId(),
    title: 'React Advanced Patterns Workshop',
    category: 'Workshops',
    date: '2025-02-15T10:00:00Z',
    venue: 'Tech Hub, Silicon Valley',
    description: 'Deep dive into advanced React patterns including render props, compound components, and custom hooks. Perfect for developers looking to level up their React skills.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: generateEventId(),
    title: 'AI/ML Hackathon 2025',
    category: 'Hackathons',
    date: '2025-02-22T09:00:00Z',
    venue: 'Innovation Center, San Francisco',
    description: '48-hour intensive hackathon focused on AI and Machine Learning solutions for real-world problems. Win exciting prizes and network with top talent.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: generateEventId(),
    title: 'The Future of Web Development',
    category: 'Tech Talks',
    date: '2025-02-28T14:00:00Z',
    venue: 'Convention Center, Austin',
    description: 'Industry leaders discuss emerging trends in web development, including WebAssembly, serverless architecture, and the next generation of JavaScript frameworks.',
    image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: generateEventId(),
    title: 'TechFest 2025: Innovation Summit',
    category: 'Fests',
    date: '2025-03-10T08:00:00Z',
    venue: 'Grand Arena, Las Vegas',
    description: 'The biggest tech festival of the year featuring startup showcases, product launches, networking sessions, and entertainment. A celebration of innovation and creativity.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: generateEventId(),
    title: 'Node.js Performance Optimization',
    category: 'Workshops',
    date: '2025-03-15T13:00:00Z',
    venue: 'Developer Center, Seattle',
    description: 'Learn advanced techniques for optimizing Node.js applications including profiling, memory management, and scaling strategies for high-performance systems.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: generateEventId(),
    title: 'Blockchain Innovation Challenge',
    category: 'Hackathons',
    date: '2025-03-25T08:00:00Z',
    venue: 'Crypto Hub, Miami',
    description: 'Build the next generation of blockchain applications. Focus on DeFi, NFTs, and Web3 solutions that can change the world. Mentorship from industry experts included.',
    image: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const pastEvents = [
  {
    id: generateEventId(),
    title: 'JavaScript Frameworks Showdown',
    category: 'Tech Talks',
    date: '2024-12-15T15:00:00Z',
    venue: 'Tech Theater, New York',
    description: 'A comprehensive comparison of modern JavaScript frameworks including React, Vue, Angular, and Svelte. Expert panel discussion and live coding demos.',
    image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: generateEventId(),
    title: 'DevOps Mastery Workshop',
    category: 'Workshops',
    date: '2024-12-08T09:00:00Z',
    venue: 'Cloud Campus, Denver',
    description: 'Hands-on workshop covering CI/CD pipelines, container orchestration, and infrastructure as code. Participants worked with real-world deployment scenarios.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: generateEventId(),
    title: 'StartupFest Winter Edition',
    category: 'Fests',
    date: '2024-11-20T08:00:00Z',
    venue: 'Innovation Arena, Boston',
    description: 'Three-day festival showcasing the most promising startups of 2024. Featured pitch competitions, investor meetups, and networking opportunities.',
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: generateEventId(),
    title: 'Mobile App Development Sprint',
    category: 'Hackathons',
    date: '2024-11-10T10:00:00Z',
    venue: 'Mobile Center, Portland',
    description: 'Intensive 24-hour hackathon focused on building mobile applications using React Native and Flutter. Amazing projects were built and several received funding.',
    image: 'https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: generateEventId(),
    title: 'Cybersecurity Essentials Summit',
    category: 'Tech Talks',
    date: '2024-10-25T14:00:00Z',
    venue: 'Security Center, Washington DC',
    description: 'Critical insights into modern cybersecurity threats and defense strategies. Industry experts shared the latest in security protocols and threat intelligence.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export { upcomingEvents, pastEvents };