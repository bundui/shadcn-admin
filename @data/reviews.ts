interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

export const reviewList: ReviewProps[] = [
  {
    image: "/avatars/7.png",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "This platform transformed our workflow! The automation features saved us countless hours, and the support team is fantastic!",
    rating: 5.0,
  },
  {
    image: "/avatars/6.png",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "I can’t imagine running my business without this tool. The insights from the analytics have helped us make smarter decisions.",
    rating: 4.8,
  },

  {
    image: "/avatars/5.png",
    name: "Adam Johnson",
    userName: "Chief Technology Officer",
    comment:
      "The training sessions were invaluable. Our team is now fully equipped to utilize all the features effectively!",
    rating: 4.9,
  },
  {
    image: "/avatars/4.png",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "Great integration options! Connecting our existing tools was a breeze, and it’s improved our overall efficiency.",
    rating: 5.0,
  },
  {
    image: "/avatars/5.png",
    name: "Ava Mitchell",
    userName: "IT Project Manager",
    comment:
      "The customer support is top-notch. They’ve been there for us every step of the way, ensuring everything runs smoothly.",
    rating: 5.0,
  },
  {
    image: "/avatars/6.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "I love the customization capabilities. It feels like this platform was built just for our business needs!",
    rating: 4.9,
  },
];
