export const navLinks = [
  {
    id: 1,
    name: 'Introdução',
    href: '#intro',
  },
  {
    id: 2,
    name: 'Projetos',
    href: '#projects',
  },
  {
    id: 3,
    name: 'Contato',
    href: '#contact',
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
