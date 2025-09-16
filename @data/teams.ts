interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const teamList: TeamProps[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Michael",
    lastName: "Holland",
    positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Zoe",
    lastName: "Garcia",
    positions: ["JavaScript Evangelist", "Deno Champion"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
      {
        name: "Github",
        url: "https://github.com/bundui",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Evan",
    lastName: "James",
    positions: ["Backend Developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
      {
        name: "Github",
        url: "https://github.com/bundui",
      },
      {
        name: "X",
        url: "https://x.com/TobyBelhome",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Pam",
    lastName: "Taylor",
    positions: ["Fullstack Developer", "UX Researcher"],
    socialNetworks: [
      {
        name: "X",
        url: "https://x.com/TobyBelhome",
      },
    ],
  },
];
