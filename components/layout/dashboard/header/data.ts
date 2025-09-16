export const notifications = [
  {
    id: 1,
    title: "Your order is placed",
    role: "Frontend Developer",
    desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",
    avatar: "1.png",
    status: "online",
    unreadmessage: false,
    date: "2 days ago"
  },
  {
    id: 2,
    title: "Congratulations Darlene  🎉",
    role: "UI/UX Designer",
    desc: "Won the monthly best seller badge",
    avatar: "2.png",
    status: "online",
    unreadmessage: true,
    date: "11 am"
  },
  {
    id: 3,
    title: "Joaquina Weisenborn",
    role: "Town planner",
    desc: "Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.",
    avatar: "3.png",
    status: "busy",
    unreadmessage: true,
    date: "12 pm"
  },
  {
    id: 4,
    title: "Brooklyn Simmons",
    role: "Data scientist",
    desc: "Added you to Top Secret Project group...",
    avatar: "4.png",
    status: "online",
    unreadmessage: true,
    date: "1 pm"
  },
  {
    id: 5,
    title: "Margot Henschke",
    role: "Dietitian",
    desc: "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
    avatar: "5.png",
    status: "busy",
    unreadmessage: false,
    date: "3 pm"
  },
  {
    id: 6,
    title: "Sal Piggee",
    role: "Marketing executive",
    desc: "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
    avatar: "6.png",
    status: "online",
    unreadmessage: false,
    date: "4 pm"
  },
  {
    id: 7,
    title: "Miguel Guelff",
    role: "Special educational needs teacher",
    desc: "Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.",
    avatar: "7.png",
    status: "online",
    unreadmessage: true,
    date: "7 pm"
  },
  {
    id: 8,
    title: "Mauro Elenbaas",
    role: "Advertising copywriter",
    desc: "Bear claw ice cream lollipop gingerbread carrot cake. Brownie gummi bears chocolate muffin croissant jelly I love marzipan wafer.",
    avatar: "8.png",
    status: "away",
    unreadmessage: true,
    date: "10 pm"
  },
  {
    id: 9,
    title: "Bridgett Omohundro",
    role: "Designer, television/film set",
    desc: "Gummies gummi bears I love candy icing apple pie I love marzipan bear claw. I love tart biscuit I love candy canes pudding chupa chups liquorice croissant.",
    avatar: "9.png",
    status: "offline",
    unreadmessage: false,
    date: "10 pm"
  },
  {
    id: 10,
    title: "Zenia Jacobs",
    role: "Building surveyor",
    desc: "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
    avatar: "10.jpeg",
    status: "away",
    unreadmessage: false,
    date: "10 am"
  }
];

export const messages = [
  {
    title: "Wade Warren",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: undefined,
    link: "#",
    date: "11 am"
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: undefined,
    link: "#",
    date: "05 am"
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: undefined,
    link: "#",
    date: "11 am"
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: undefined,
    link: "#",
    date: "12 am"
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: undefined,
    link: "#",
    date: "10 am"
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: undefined,
    link: "#",
    date: "10 am"
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: undefined,
    link: "#",
    date: "09 pm"
  }
];

export type Message = (typeof messages)[number];
export type Notification = (typeof notifications)[number];
