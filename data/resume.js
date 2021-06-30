// export interface link {
//   text: string;
//   href: string;
// }

// export interface basics {
//   name: string;
//   email: string;
//   phone: string;
//   links: link[];
// }

// export interface project {
//   name: string;
//   tools: string[];
//   description: string;
//   url: string;
// }

// export interface expertise {
//   name: string;
//   items: string[];
// }
// export interface skill {
//   name: string;
//   items: array<link | string>;
// }

// export interface job {
//   company: {
//     name: string;
//     link: string;
//   };
//   position: string;
//   dates: string;
// }

// export interface section<t> {
//   heading: string;
//   data: t[];
// }

// export interface resume {
//   header: {
//     basics: basics;
//     skills: skill[];
//   };
//   body: {
//     expertise: section<expertise>;
//     projects: section<project>;
//     work: section<job>;
//   };
// }

export const resume = {
  skills: [
    {
      name: 'systems',
      items: ['rust', 'c#', 'c', 'c++'],
    },
    {
      name: 'frontend',
      items: ['vuejs', 'svelte', 'blazor', 'bootstrap'],
    },
    {
      name: 'backend',
      items: ['actix-web', 'rocket', 'django', 'expressjs', 'asp.net'],
    },
    {
      name: 'database',
      items: ['mysql', 'mongodb', 'postgresql', 'mariadb'],
    },
    {
      name: 'scripting',
      items: ['python', 'shell', 'typescript', 'javascript', 'dart'],
    },
    {
      name: 'platforms',
      items: ['windows', 'macos', 'linux', 'web'],
    },
  ],
  expertise: [
    {
      name: 'systems',
      items: [
        'utilize object-oriented and data-oriented design paradigms for greater performance and code legibility',
        'create applications to aid the efficiency of employee operations',
        'design tools to automate monotonous tasks',
        'develop comprehensive unit tests to ensure proper functionality',
      ],
    },
    {
      name: 'backend',
      items: [
        'design strongly typed restful crud apis',
        'implement efficient algorithms for data transfer and transform',
        'provide a secure interface for sql based databases',
      ],
    },
    {
      name: 'frontend',
      items: [
        'build responsive, asynchronous web applications interfacing with public and private apis',
      ],
    },
  ],

  projects: [
    {
      name: 'ticket manager',
      tools: ['rust', 'actix-web', 'diesel', 'mariadb', 'svelte'],
      description:
        'a full stack web application co-developed with my roommate. i contributed a restful crud api written in rust using actix-web and a mariadb database with the diesel orm.',
      url: 'https://www.github.com/charliethomson/ticket',
    },
    {
      name: 'b',
      tools: ['rust', 'webassembly', 'vuejs'],
      description:
        'a work in progress, a b interpreter written in rust, compiled to webassembly, running a vue app in the browser. currently the interpreter is complete, i am building the vue app.',
      url: 'https://www.github.com/charliethomson/brust',
    },
    {
      name: 'pemdrs',
      tools: ['rust'],
      description:
        'a calculator written in rust that respects order of operations. i created a lexer, implemented the shunting yard algorithm, and implemented a stack-based postfix notation evaluator',
      url: 'https://www.github.com/charliethomson/pemdrs',
    },
  ],
  work: [
    {
      company: {
        name: 'arcane software',
        link: 'https://arcane.software/',
      },
      position: 'web developer',
      dates: '05/2021-present',
    },
    {
      company: {
        name: 'ubreakifix',
        link: 'https://www.ubreakifix.com',
      },
      position: 'repair technician',
      dates: '01/2020-present',
    },
    {
      company: {
        name: 'orange county public schools',
        link: 'https://www.ocss-va.org',
      },
      position: 'information technology intern',
      dates: '09/2018-09/2019',
    },
  ],
}
