import {
  faCss3Alt,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJira,
  faNode,
  faNpm,
  faReact,
  faSass,
  faSquareJs,
  faTrello,
  faVuejs,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import { IMAGES } from './assets/images/images'

export const Author = [
  {
    surname: 'Emma',
    lastname: 'Spitz',
    birthday: '1997-12-08',
    age: function () {
      return Math.floor(
        Math.abs(Date.now() - new Date(this.birthday).getTime()) /
          (1000 * 3600 * 24) /
          365.25
      )
    },
  },
]

export const projects = [
  {
    name: 'RocketFlow',
    description: `A fullstack productivity To Do-app that's a mixture of the well known time maningen method Pomodoro and project management tool Kanban. 
    Co-built with one of my classmates and designed by a team of four, same year UX/UI students that also took turns being our SCRUM-masters during the project.`,
    tools: ['react.js', 'figma', 'sql', 'mongoose', 'node.js', 'git', 'github'],
    type: 'school project',
    goal: 'Build a fullstack application using the framework react.js whilst working in an agile team together with UX/UI students.',
    repo: 'https://github.com/ztipsamme/rocketflow',
    demo: 'https://rocketflow.onrender.com/#/',
    img: IMAGES.rocketflowLanding,
  },
  {
    name: 'Jontastic Slots',
    description: `A frontend only, online slots-machine game with a store for in-game purchases and an in-game currency that can only be earned by playing the game. Co-built with four classmates using the build tool Vite.js and framework Vue.js.`,
    tools: [
      'vue.js',
      'css',
      'figma',
      'scrum',
      'vite.js',
      'node.js',
      'git',
      'github',
    ],
    type: 'school project',
    goal: 'Build a frontend using the framework vue.js whilst working in an agile team with only Frontend and Javascript students.',
    repo: 'https://github.com/ztipsamme/jontastic-slots',
    demo: 'https://emmaspitz.se/jontastic-slots2/',
    img: IMAGES.jontasticSlots,
  },
  {
    name: 'Dictionary',
    description: `A react.js, frontend only Dictionary app using the WordsAPI. Search for any word that the API contains to get the description and synonyms of that word.`,
    tools: ['react.js', 'figma', 'git', 'github'],
    type: 'school project',
    goal: '',
    repo: 'https://github.com/ztipsamme/dictionary',
    demo: 'https://emmaspitz.se/dictionary/#/',
    img: IMAGES.dictionary,
  },
  {
    name: 'Rosemary Garden',
    description: 'bNDqqFHCIUWiwi',
    tools: ['html', 'css', 'figma'],
    type: 'school project',
    goal: 'Build a frontend using only vanilla HTML and CSS.',
    repo: 'https://github.com/ztipsamme/rosemary-garden',
    demo: 'https://emmaspitz.se/rosemary-garden/',
  },
  {
    name: 'My First Portfolio',
    description: 'bNDqqFHCIUWiwi',
    tools: ['react.js', 'scss', 'figma', 'node.js', 'git', 'github'],
    type: 'school project',
    goal: 'Build a frontend with the framework react.js',
    repo: 'https://github.com/ztipsamme/portfolio',
    demo: '',
  },
]

export const aboutme = [
  {
    title: ' Who am I?',
    text: `I'm a ${Author[0].age()} year old frontend developer student based in Bohuslän,
    Sweden. At this point in time I'm in the third semester of my 2
    year long studies at IT-Högskolan in Gothenburg. Outside of school
    my hobbies are playing The Sims 4, practice coding and to
    choreograph new dances for my side hustle as a Zumba® instructor.`,
    img: IMAGES.profilePicture,
  },
  {
    title: 'What type of projects do I like?',
    text: `Projects that really tickle my interest are heavy on using CSS,
    SCSS etc. My dream is to one day build my own component library or
    contribute to a component library like Tailwind or Bootstrap.
    Adding motion design and micro interactions to websites are also
    intriguing and something that I would love to explore more.`,
    img: IMAGES.laptop,
  },
  {
    title: 'What do I bring to the team?',
    text: `Whilst I can be a little quiet and shy in the beginning I'm
    actually quite bubbly and ambitious. Once I'm comfortable in my
    surroundings, teamwork is my strong suit. In previous
    school-projects my classmates have given me the roll of Project
    Owner because of my organisational skills and aim to keep everyone
    on course for efficient and smooth sailing towards the goal. I'm
    also very good at giving feedback on my teammates work — when
    appropriate, as well as helping out when needed.`,
    img: IMAGES.teamwork,
  },
]

export const stack = [
  { label: 'HTML', icon: faHtml5 },
  { label: 'CSS', icon: faCss3Alt },
  { label: 'Sass', icon: faSass },
  { label: 'JavaScript', icon: faSquareJs },
  { label: 'Vue.js', icon: faVuejs },
  { label: 'React.js', icon: faReact },
  { label: 'WordPress', icon: faWordpress },
  { label: 'NPM', icon: faNpm },
  { label: 'Node.js', icon: faNode },
  { label: 'Trello', icon: faTrello },
  { label: 'Jira', icon: faJira },
  { label: 'Figma', icon: faFigma },
  { label: 'Git', icon: faGit },
  { label: 'GitHub', icon: faGithub },
]
