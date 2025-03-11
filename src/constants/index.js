export const navLinks = [
  {
    id: 1,
    name: 'Início',
    href: '#home',
  },
  {
    id: 2,
    name: 'Sobre',
    href: '#about',
  },
  {
    id: 3,
    name: 'Habilidades',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contato',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Sistema de associados',
    desc: 'Recentemente, trabalhei como freelancer no desenvolvimento de um sistema interno para uma associação. Utilizei principalmente Vue.js e Node.js para o desenvolvimento. Com o sistema o cliente pôde largar o papel e passou a armazenar e manipular os dados de seus associados somente pelo computador.',
    subdesc: 'Construí um site bem acessível, pois após entender os requisitos do sistema, concluí que o ideal seria um site bem limpo e com poucos botões, tendo em vista que a maioria dos usuários seriam pessoas com pouca prática no uso de computadores. OBS: para testes no site logue com "novonovo" no login e senha.',
    href: 'https://associadosbancodobrasilfranca.onrender.com/login',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
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
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Cecília Digital',
    desc: 'Este projeto se trata de uma página para o aplicativo de organização financeira Cecília Digital. Nele participei como desenvolvedor front-end freelancer. Minha contribuição foi a introdução da página home, a criação da página Blog por completo e adição do navbar e footer.',
    subdesc:
      'Nesse projeto utilizei principalmente React, TypeScript e a biblioteca styled-components. Vale lembrar que esse site foi uma cópia que subi, pois a versão completa ainda está sendo desenvolvida por outros profissionais contratados para o projeto.',
    href: 'https://cecilia-digital-demo.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
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
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  }
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
    name: 'Linguagens',
    pos: 'Analista de redes',
    duration: '2022 - Present',
    title: "O Framer serve como minha ferramenta preferida para criar protótipos interativos. Eu o uso para dar vida aos designs, permitindo que as partes interessadas experimentem o fluxo do usuário e as interações antes do desenvolvimento.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web',
    duration: '2020 - 2022',
    title: "Figma é minha plataforma de design colaborativo de escolha. Eu a utilizo para trabalhar perfeitamente com membros da equipe e clientes, facilitando feedback em tempo real e iterações de design. É baseado em nuvem.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Web',
    duration: '2019 - 2020',
    title: "O Notion me ajuda a manter meus projetos organizados. Eu o uso para gerenciamento de projetos, rastreamento de tarefas e como um hub central para documentação, garantindo que tudo, desde notas de design até.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Notion',
    pos: 'Web',
    duration: '2019 - 2020',
    title: "O Notion me ajuda a manter meus projetos organizados. Eu o uso para gerenciamento de projetos, rastreamento de tarefas e como um hub central para documentação, garantindo que tudo, desde notas de design até.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
