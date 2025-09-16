import { IconFolder, IconListDetails } from "@tabler/icons-react";
import {
  Building2,
  CircleIcon,
  ContactRound,
  CookingPot,
  Earth,
  Landmark,
  MessageCircleMore,
  MessageCircleQuestionMark,
  School,
  ShieldAlert,
  ShoppingBag,
  SquareKanban,
  UserRoundSearch
} from "lucide-react";

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
          url: "/ecommerce",
          icon: ShoppingBag,
          items: [
            {
              title: "Dashboard",
              url: "/ecommerce"
            },
            {
              title: "Checkout",
              url: "/checkout"
            },
            {
              title: "Order Receipt",
              url: "/order-receipt"
            },
            {
              title: "Product Filter",
              url: "/product-filter"
            }
          ]
        },
        {
          title: "CRM",
          url: "/crm",
          icon: UserRoundSearch,
          items: [
            {
              title: "Dashboard",
              url: "/crm"
            },
            {
              title: "Customers",
              url: "/customers"
            },
            {
              title: "Customer Details",
              url: "/customer-details"
            }
          ]
        },
        {
          title: "Banking",
          url: "/banking",
          icon: Landmark
        },
        {
          title: "Chats",
          url: "/chats",
          icon: MessageCircleMore
        },
        {
          title: "Kanban Board",
          url: "/kanban-board",
          icon: SquareKanban
        },
        {
          title: "POS App",
          url: "/pos-app",
          icon: CookingPot
        },
        {
          title: "Social Media",
          url: "/social-media",
          icon: Earth
        },
        {
          title: "Real Estate Listings",
          url: "/real-estate-listings",
          icon: School
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
          title: "Projects",
          url: "/projects-list",
          icon: IconFolder
        },
        {
          title: "User Profile",
          url: "/user-profile",
          icon: ContactRound
        },
        {
          title: "Settings",
          url: "/settings",
          icon: IconFolder
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
    }
  ]
};

export type SidebarNavMain = (typeof sidebarData.navMain)[number];
export type SidebarNavMainItem = (typeof sidebarData.navMain)[0]["items"][number];
