import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  CalendarIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FileTextIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  MoreVerticalIcon,
  PhoneIcon,
  SquareCheckIcon,
  UsersIcon,
  UserIcon,
  BriefcaseIcon,
  LayoutGridIcon,
  LinkIcon,
  SearchIcon,
  FolderOpenIcon,
  UserPlusIcon,
  PaletteIcon,
  SmartphoneIcon,
  BookOpenIcon,
  CodeIcon,
  MegaphoneIcon,
  GitForkIcon,
  DatabaseIcon,
  FigmaIcon,
  LockIcon,
  CircleDotIcon as CircleDotIconFilled
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Website SEO",
    date: "10 May 2021",
    leader: "Eileen",
    team: ["/avatars/08.jpeg", "/avatars/08.jpeg", "/avatars/08.jpeg"],
    teamCount: 4,
    progress: 38,
    icon: <GlobeIcon className="h-4 w-4 text-orange-500" />,
    iconBg: "bg-orange-100"
  },
  {
    id: 2,
    name: "Social Banners",
    date: "03 Jan 2021",
    leader: "Owen",
    team: ["/avatars/08.jpeg", "/avatars/08.jpeg"],
    teamCount: 2,
    progress: 45,
    icon: <MegaphoneIcon className="h-4 w-4 text-blue-500" />,
    iconBg: "bg-blue-100"
  },
  {
    id: 3,
    name: "Logo Designs",
    date: "12 Aug 2021",
    leader: "Keith",
    team: ["/avatars/08.jpeg", "/avatars/08.jpeg"],
    teamCount: 1,
    progress: 92,
    icon: <PaletteIcon className="h-4 w-4 text-purple-500" />,
    iconBg: "bg-purple-100"
  },
  {
    id: 4,
    name: "IOS App Design",
    date: "19 Apr 2021",
    leader: "Merline",
    team: ["/avatars/08.jpeg", "/avatars/08.jpeg"],
    teamCount: 1,
    progress: 56,
    icon: <SmartphoneIcon className="h-4 w-4 text-green-500" />,
    iconBg: "bg-green-100"
  },
  {
    id: 5,
    name: "Figma Dashboards",
    date: "08 Apr 2021",
    leader: "Harmonia",
    team: ["/avatars/08.jpeg", "/avatars/08.jpeg"],
    teamCount: 0,
    progress: 25,
    icon: <FigmaIcon className="h-4 w-4 text-red-500" />,
    iconBg: "bg-red-100"
  },
  {
    id: 6,
    name: "Crypto Admin",
    date: "29 Sept 2021",
    leader: "Allyson",
    team: ["/avatars/08.jpeg", "/avatars/08.jpeg"],
    teamCount: 1,
    progress: 36,
    icon: <LockIcon className="h-4 w-4 text-yellow-500" />,
    iconBg: "bg-yellow-100"
  },
  {
    id: 7,
    name: "Create Website",
    date: "20 Mar 2021",
    leader: "Georgie",
    team: ["/avatars/08.jpeg", "/avatars/08.jpeg"],
    teamCount: 3,
    progress: 72,
    icon: <CodeIcon className="h-4 w-4 text-cyan-500" />,
    iconBg: "bg-cyan-100"
  }
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto max-w-6xl space-y-6">
      {/* Header Section */}
      <Card>
        <CardContent className="relative z-10 flex flex-col items-center gap-4 md:flex-row">
          <Avatar className="size-24 shadow-lg md:h-32 md:w-32">
            <AvatarImage src="/avatars/07.jpeg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:mt-0 md:ml-4 md:text-left">
            <h1 className="text-2xl font-bold md:text-3xl">John Doe</h1>
            <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm md:justify-start">
              <div className="flex items-center gap-1">
                <BriefcaseIcon className="h-4 w-4" />
                <span>UX Designer</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPinIcon className="h-4 w-4" />
                <span>Vatican City</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>Joined April 2021</span>
              </div>
            </div>
          </div>
          <Button>
            <UserPlusIcon />
            Connected
          </Button>
        </CardContent>
      </Card>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-4">
        <Button variant="outline" className="bg-accent rounded-full">
          <UserIcon></UserIcon>
          Profile
        </Button>
        <Button variant="outline" className="rounded-full">
          <UsersIcon />
          Teams
        </Button>
        <Button variant="outline" className="rounded-full">
          <LayoutGridIcon />
          Projects
        </Button>
        <Button variant="outline" className="rounded-full">
          <LinkIcon />
          Connections
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          {/* About Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">About</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Full Name: <span className="font-medium text-gray-800">John Doe</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="h-4 w-4 text-gray-500" />
                <span>
                  Status: <span className="font-medium text-gray-800">Active</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Role: <span className="font-medium text-gray-800">Developer</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <GlobeIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Country: <span className="font-medium text-gray-800">USA</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpenIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Languages: <span className="font-medium text-gray-800">English</span>
                </span>
              </div>
              <h3 className="pt-2 font-semibold text-gray-800">CONTACTS</h3>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Contact: <span className="font-medium text-gray-800">{"(123) 456-7890"}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquareIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Skype: <span className="font-medium text-gray-800">john.doe</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Email: <span className="font-medium text-gray-800">john.doe@example.com</span>
                </span>
              </div>
              <h3 className="pt-2 font-semibold text-gray-800">TEAMS</h3>
              <div className="flex items-center gap-2">
                <CodeIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Backend Developer{" "}
                  <span className="font-medium text-gray-800">{"(126 Members)"}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CodeIcon className="h-4 w-4 text-gray-500" />
                <span>
                  React Developer{" "}
                  <span className="font-medium text-gray-800">{"(98 Members)"}</span>
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <SquareCheckIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Task Compiled: <span className="font-medium text-gray-800">13.5k</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FolderOpenIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Projects Compiled: <span className="font-medium text-gray-800">146</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon className="h-4 w-4 text-gray-500" />
                <span>
                  Connections: <span className="font-medium text-gray-800">897</span>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Activity Timeline */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Activity Timeline</CardTitle>
              <MoreVerticalIcon className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="relative flex flex-col items-center">
                  <CircleDotIconFilled className="h-4 w-4 text-purple-500" />
                  <div className="mt-2 h-full w-px bg-gray-200" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">12 Invoices have been paid</h4>
                    <span className="text-xs text-gray-500">12 min ago</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Invoices have been paid to the company
                  </p>
                  <div className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
                    <FileTextIcon className="h-4 w-4 text-gray-500" />
                    <a href="#" className="text-purple-600 hover:underline">
                      invoices.pdf
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex flex-col items-center">
                  <CircleDotIconFilled className="h-4 w-4 text-green-500" />
                  <div className="mt-2 h-full w-px bg-gray-200" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">Client Meeting</h4>
                    <span className="text-xs text-gray-500">45 min ago</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Project meeting with john @10:15am
                  </p>
                  <div className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/avatars/08.jpeg" alt="Lester McCarthy" />
                      <AvatarFallback>LM</AvatarFallback>
                    </Avatar>
                    <span>Lester McCarthy (Client)</span>
                  </div>
                  <p className="ml-8 text-xs text-gray-500">CEO of Pixinvent</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex flex-col items-center">
                  <CircleDotIconFilled className="h-4 w-4 text-blue-500" />
                  <div className="mt-2 h-full w-px bg-gray-200" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">Create a new project for client</h4>
                    <span className="text-xs text-gray-500">2 Day ago</span>
                  </div>
                  <p className="text-muted-foreground text-sm">6 team members in a project</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/avatars/08.jpeg" alt="Avatar 1" />
                      <AvatarFallback>A1</AvatarFallback>
                    </Avatar>
                    <Avatar className="-ml-2 h-6 w-6">
                      <AvatarImage src="/avatars/08.jpeg" alt="Avatar 2" />
                      <AvatarFallback>A2</AvatarFallback>
                    </Avatar>
                    <Avatar className="-ml-2 h-6 w-6">
                      <AvatarImage src="/avatars/08.jpeg" alt="Avatar 3" />
                      <AvatarFallback>A3</AvatarFallback>
                    </Avatar>
                    <div className="text-muted-foreground -ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs">
                      +3
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connections and Teams Sections */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Connections */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-semibold">Connections</CardTitle>
                <MoreVerticalIcon className="h-5 w-5 text-gray-500" />
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "Cecilia Payne",
                    connections: "45 Connections",
                    avatar: "/avatars/09.jpeg"
                  },
                  {
                    name: "Curtis Fletcher",
                    connections: "1.32k Connections",
                    avatar: "/avatars/09.jpeg"
                  },
                  {
                    name: "Alice Stone",
                    connections: "125 Connections",
                    avatar: "/avatars/09.jpeg"
                  },
                  {
                    name: "Darrell Barnes",
                    connections: "456 Connections",
                    avatar: "/avatars/09.jpeg"
                  },
                  {
                    name: "Eugenia Moore",
                    connections: "1.2k Connections",
                    avatar: "/avatars/09.jpeg"
                  }
                ].map((connection, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={connection.avatar || "/avatars/08.jpeg"}
                          alt={connection.name}
                        />
                        <AvatarFallback>
                          {connection.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-800">{connection.name}</p>
                        <p className="text-sm text-gray-500">{connection.connections}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-purple-600 hover:bg-purple-100">
                      <UserPlusIcon className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-purple-600 hover:bg-purple-100">
                  View all connections
                </Button>
              </CardContent>
            </Card>

            {/* Teams */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-semibold">Teams</CardTitle>
                <MoreVerticalIcon className="h-5 w-5 text-gray-500" />
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "React Developers",
                    members: "72 Members",
                    tag: "Developer",
                    icon: <GitForkIcon className="h-5 w-5 text-blue-500" />,
                    iconBg: "bg-blue-100"
                  },
                  {
                    name: "Support Team",
                    members: "122 Members",
                    tag: "Support",
                    icon: <DatabaseIcon className="h-5 w-5 text-orange-500" />,
                    iconBg: "bg-orange-100"
                  },
                  {
                    name: "UI Designers",
                    members: "7 Members",
                    tag: "Designer",
                    icon: <PaletteIcon className="h-5 w-5 text-pink-500" />,
                    iconBg: "bg-pink-100"
                  },
                  {
                    name: "Vue.js Developers",
                    members: "289 Members",
                    tag: "Developer",
                    icon: <CodeIcon className="h-5 w-5 text-green-500" />,
                    iconBg: "bg-green-100"
                  },
                  {
                    name: "Digital Marketing",
                    members: "24 Members",
                    tag: "Marketing",
                    icon: <MegaphoneIcon className="h-5 w-5 text-gray-500" />,
                    iconBg: "bg-gray-100"
                  }
                ].map((team, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-full p-2 ${team.iconBg}`}>{team.icon}</div>
                      <div>
                        <p className="font-medium text-gray-800">{team.name}</p>
                        <p className="text-sm text-gray-500">{team.members}</p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                      {team.tag}
                    </Badge>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-purple-600 hover:bg-purple-100">
                  View all teams
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Project List */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Project List</CardTitle>
              <div className="relative">
                <SearchIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search Project"
                  className="w-[200px] rounded-md py-2 pr-4 pl-9 text-sm"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="text-xs text-gray-500 uppercase">
                    <TableHead className="w-[30px]">
                      <input type="checkbox" className="form-checkbox rounded text-purple-600" />
                    </TableHead>
                    <TableHead>PROJECT</TableHead>
                    <TableHead>LEADER</TableHead>
                    <TableHead>TEAM</TableHead>
                    <TableHead>PROGRESS</TableHead>
                    <TableHead className="text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>
                        <input type="checkbox" className="form-checkbox rounded text-purple-600" />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className={`rounded-full p-2 ${project.iconBg}`}>{project.icon}</div>
                          <div>
                            <p className="font-medium text-gray-800">{project.name}</p>
                            <p className="text-xs text-gray-500">{project.date}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{project.leader}</TableCell>
                      <TableCell>
                        <div className="flex items-center -space-x-2">
                          {project.team.map((avatarSrc, idx) => (
                            <Avatar key={idx} className="h-6 w-6 border-2 border-white">
                              <AvatarImage
                                src={avatarSrc || "/avatars/08.jpeg"}
                                alt={`Team member ${idx + 1}`}
                              />
                              <AvatarFallback>TM</AvatarFallback>
                            </Avatar>
                          ))}
                          {project.teamCount > project.team.length && (
                            <div className="text-muted-foreground flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xs">
                              +{project.teamCount - project.team.length}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={project.progress}
                            className="h-2 w-24 bg-gray-200 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-purple-400 [&::-webkit-progress-value]:to-blue-500"
                          />
                          <span className="text-muted-foreground text-sm">{project.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreVerticalIcon className="h-5 w-5 text-gray-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="text-muted-foreground mt-4 flex items-center justify-between text-sm">
                <span>Showing 1 to 7 of 10 entries</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                    <ChevronLeftIcon className="h-4 w-4" />
                  </Button>
                  <Button className="h-8 w-8 bg-purple-600 text-white hover:bg-purple-700">
                    1
                  </Button>
                  <Button variant="outline" className="h-8 w-8 bg-transparent">
                    2
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
