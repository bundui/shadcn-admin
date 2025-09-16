import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Home,
  Users,
  Bell,
  MessageCircle,
  Bookmark,
  User,
  Settings,
  ImageIcon,
  Smile,
  Calendar,
  MapPin,
  Heart,
  Repeat2,
  Share,
  MoreHorizontal
} from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Social Media",
    description:
      "A social media app is a template used to connect, share and interact with others online. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/social-media"
  });
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-7xl">
        {/* Left Sidebar */}
        <div className="border-border sticky top-0 h-screen w-64 overflow-y-auto border-r p-4">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-lg font-semibold">
              <Home className="mr-3 h-6 w-6" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-3 h-5 w-5" />
              Communities
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-3 h-5 w-5" />
              Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MessageCircle className="mr-3 h-5 w-5" />
              Messages
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bookmark className="mr-3 h-5 w-5" />
              Bookmarks
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-3 h-5 w-5" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Button>
          </nav>

          <Button className="mt-6 w-full bg-black text-white hover:bg-gray-800">Create Post</Button>

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold">Your Communities</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <div className="mr-2 h-2 w-2 rounded-full bg-pink-500"></div>
                Design Community
              </div>
              <div className="flex items-center text-sm">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                Tech Enthusiasts
              </div>
              <div className="flex items-center text-sm">
                <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                Sustainability
              </div>
            </div>
          </div>
        </div>

        {/* Main Timeline */}
        <div className="border-border max-w-2xl flex-1 border-r">
          {/* Post Composer */}
          <div className="border-border border-b p-4">
            <div className="flex space-x-3">
              <Avatar>
                <AvatarImage src="/avatars/09.jpeg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Input
                  placeholder="What's happening?"
                  className="border-none p-0 text-xl placeholder:text-gray-500 focus-visible:ring-0"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
                      <ImageIcon className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
                      <Smile className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
                      <Calendar className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
                      <MapPin className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button className="bg-gray-600 px-6 text-white hover:bg-gray-700">Post</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Posts */}
          <div>
            {/* Post 1 */}
            <div className="border-border border-b p-4 hover:bg-gray-50/50">
              <div className="flex space-x-3">
                <Avatar>
                  <AvatarImage src="/avatars/09.jpeg" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Moyo Shiro</span>
                    <span className="text-gray-500">@moyo</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500">09:00 AM</span>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">
                    Just launched my new portfolio website! 🚀 Check out these 15 standout examples
                    of creative, sleek, and interactive portfolio designs that inspired me. Which
                    one&#39;s your favorite? #WebDesign #PortfolioInspiration
                  </p>
                  <div className="mt-3 flex items-center space-x-6 text-gray-500">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">62</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 hover:text-green-500">
                      <Repeat2 className="h-4 w-4" />
                      <span className="text-sm">23</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 hover:text-blue-500">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">45</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:text-blue-500">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="border-border border-b p-4 hover:bg-gray-50/50">
              <div className="flex space-x-3">
                <Avatar>
                  <AvatarImage src="/avatars/09.jpeg" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Sophia</span>
                    <span className="text-gray-500">@sophia</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500">10:12 AM</span>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">
                    Dreaming of distant worlds... 🪐 This AI-generated image captures the essence of
                    exploration. What stories does it spark in your imagination?
                  </p>
                  <div className="mt-3 overflow-hidden rounded-2xl">
                    <Image
                      src="/saturn-image.png"
                      alt="Saturn with rings in space"
                      width={500}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="mt-3 flex items-center space-x-6 text-gray-500">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">128</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 hover:text-green-500">
                      <Repeat2 className="h-4 w-4" />
                      <span className="text-sm">34</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 hover:text-blue-500">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">67</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:text-blue-500">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 space-y-6 p-4">
          {/* Who to Follow */}
          <Card>
            <CardContent className="p-4">
              <h3 className="mb-4 text-lg font-bold">Who to follow</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/avatars/09.jpeg" />
                      <AvatarFallback>G</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">George</p>
                      <p className="text-sm text-gray-500">@georgeSZ</p>
                      <p className="text-muted-foreground mt-1 text-xs">
                        I design digital products and ventures.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/avatars/09.jpeg" />
                      <AvatarFallback>NS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">Nettie Schuster</p>
                      <p className="text-sm text-gray-500">@Precious3</p>
                      <p className="text-muted-foreground mt-1 text-xs">
                        The No Code SaaS Guy. Building a portfolio of software companies.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/avatars/09.jpeg" />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">Mrs. Lola Rohan</p>
                      <p className="text-sm text-gray-500">@collin_marks</p>
                      <p className="text-muted-foreground mt-1 text-xs">
                        I design digital products and ventures.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card>
            <CardContent className="p-4">
              <h3 className="mb-4 text-lg font-bold">Trending Topics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-blue-600">#TechInnovation</span>
                  <span className="text-sm text-gray-500">5.2K posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-blue-600">#ArtificialIntelligence</span>
                  <span className="text-sm text-gray-500">12K posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-blue-600">#ClimateAction</span>
                  <span className="text-sm text-gray-500">8.7K posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-blue-600">#SpaceExploration</span>
                  <span className="text-sm text-gray-500">3.9K posts</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
