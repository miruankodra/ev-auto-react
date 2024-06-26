import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
  // {
  //   id: "clients",
  //   title: "Clients",
  // },
];

export const aboutLinks = [
  {
    id: "aboutUs",
    title: "Who we are",
    link: 'about'
  },
  {
    id: "kambiomatik",
    title: "About Kambiomatik",
    link: 'https://kambiomatik.com/about-kambiomatik/'
  },
  {
    id: "prestige",
    title: "About Prestige",
    link: 'https://prestigehome.al/en/about-us/'
  }
]

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Mobile",
    links: [
      {
        name: "Sales",
        link: "+355672026730",
      },
      {
        name: "Workshop",
        link: "+355672026727",
      },
    ],
  },
  {
    title: "Email",
    links: [
      {
        name: "info@evauto.al",
      },
    ],
  },
  {
    title: "Address",
    links: [
      {
        name: "Airport Road, KM 3, Tirana, Albania",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const slides = [
  [
    { year: 'slide1.jpg', text: 'Slide 1' },
    { year: 'slide2.jpg', text: 'Slide 2' },
  ],
  [
    { year: 'slide3.jpg', text: 'Slide 3' },
    { year: 'slide3.jpg', text: 'Slide 3' },
  ],
  [
    { year: 'slide3.jpg', text: 'Slide 3' },
    { year: 'slide3.jpg', text: 'Slide 3' },
  ]


];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];