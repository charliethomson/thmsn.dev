export const projects = [
  {
    name: 'ticket manager',
    url: 'https://www.github.com/charliethomson/ticket',

    tools: ['rust', 'actix-web', 'diesel', 'mariadb', 'svelte'],
    description:
      'a full stack web application co-developed with my roommate. i contributed a restful crud api written in rust using actix-web and a mariadb database with the diesel orm.',
    learned:
      "this project is where i learned most of what i know regarding back-end web development. this was the first time i had written a proper api. i designed a few tools and libraries to make it a bit less painless (rust's back-end ecosystem is a bit immature). i also learned about rust's procedural macro system, which i used to implement most of the helper libraries i wrote.",
  },
  {
    name: 'pemdrs',
    url: 'https://www.github.com/charliethomson/pemdrs',

    tools: ['rust'],
    description:
      'a calculator written in rust that respects order of operations. i created a lexer, implemented the shunting yard algorithm, and implemented a stack-based postfix notation evaluator',
    learned:
      "this project taught me the basics of scanning lexers, as well as the superiority of postfix notation. this was my first major endeavor into a project that would have seemed impossible to my younger self. this is most likely the project i am the proudest of, solely because it showed me how far i'd come.",
  },
  {
    name: 'language',
    url: 'https://www.github.com/charliethomson/lang',

    tools: ['dart'],
    description:
      'an educational programming language written in dart with a hand rolled lexer, parser, and interpreter',
    learned:
      "in this project i learned how real lexers work, as well as the ins and outs of parsers. i am glad i hand rolled everything, however, i feel i would have had an easier and more broadly applicable experience. this project is ~almost~ complete, there are a bunch of bugs, but i haven't had the time to work on squashing them.",
  },
  {
    name: 'fish manpage completions',
    url: 'https://www.github.com/rust-dc/fish-manpage-completions',

    tools: ['rust'],
    description:
      "an open source port of a portion of the <a href='https://fishshell.com/'>fish shell</a> that scraopes command completions from unix manpages.",
    learned:
      "the project was created by the progenitor of the dc rust group, <a href='https://github.com/scooter-dangle'>scott steele</a>. i began working with them at my first meetup in sept 2019. i wrote the majority of the tool that strips the data that we need from the manpage, eventually totalling 10 merged commits with ~2500 changes. this project taught me to work with a team of people with differing opinions regarding the way projects should be layed out, as well as being shown that i am not always the smartest person in the room.",
  },
  {
    name: 'population control',
    url: 'https://github.com/charliethomson/population_control',

    tools: ['rust'],
    description:
      "this project was inspired by <a href='https://www.youtube.com/watch?v=6jn4ri7nkes'>this video</a> by cgp grey talking about apporitonment, <a href='https://youtu.be/6jn4ri7nkes?t=438'>where he says</a> how he thought the us doled out the house seats (which is not how they do it [see 'naive algorithm'])",
  },
].map((_, id) => ({ ..._, id }))
