import { IconFolder, IconListDetails } from "@tabler/icons-react";
import {
  BrainIcon,
  Building2,
  ChartNoAxesColumn,
  CircleIcon,
  ContactRound,
  CookingPot,
  Earth,
  Landmark,
  MessageCircleMore,
  MessageCircleQuestionMark,
  Presentation,
  School,
  ShieldAlert,
  ShoppingBag,
  SquareKanban,
  UserRoundSearch
} from "lucide-react";
import data from "@/config/nav.json";

export const sidebarData = {
  user: {
    name: "Andrew",
    email: "m@example.com",
    avatar: "/avatars/01.jpeg"
  },
  navMain: [
    {
      title: "Main",
      items: [
        {
          title: "Ecommerce",
          icon: ShoppingBag,
          items: [
            {
              title: "Dashboard",
              url: "/ecommerce-dashboard"
            },
            {
              title: "Products List",
              url: "/products"
            },
            {
              title: "Product Filter",
              url: "/product-filter"
            },
            {
              title: "Checkout",
              url: "/checkout"
            }
          ]
        },
        {
          title: "Analytics",
          url: "/analytics",
          icon: ChartNoAxesColumn
        },
        {
          title: "Real Estate Listings",
          url: "/real-estate-listings",
          icon: School
        },
        {
          title: "Account",
          url: "/",
          icon: ContactRound,
          items: [
            {
              title: "User Profile",
              url: "/user-profile"
            },
            {
              title: "Settings",
              url: "/settings"
            }
          ]
        },
        {
          title: "Job Postings",
          url: "/job-postings",
          icon: Building2
        },
        {
          title: "Contacts",
          url: "/contacts",
          icon: IconListDetails
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: MessageCircleQuestionMark
        },
        {
          title: "Empty State",
          url: "/empty-state",
          icon: CircleIcon
        },
        {
          title: "403 Page",
          url: "/403",
          icon: ShieldAlert
        }
      ]
    },
    {
      title: "Apps",
      items: [
        {
          title: "Chats",
          url: "/chats",
          icon: MessageCircleMore
        },
        {
          title: "Kanban Board",
          url: "/kanban-board",
          icon: SquareKanban
        }
      ]
    }
  ]
};

export type SidebarNavMainItem = (typeof sidebarData.navMain)[0]["items"][number];
