import { Metadata } from "next";
import { Settings, Plus } from "lucide-react";
import { generateMeta } from "@/lib/generate-meta";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

import projects from "./data.json";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Projects List",
    description:
      "A projects list is an organized overview of projects with key details and statuses. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/projects-list"
  });
}

export default function Page() {
  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects Board</h1>
            <p className="text-muted-foreground mt-1">List of your ongoing projects</p>
          </div>
          <Button>
            <Plus />
            New Project
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardContent>
                {/* Settings Icon */}
                <Button variant="ghost" size="sm" className="absolute top-4 right-4 h-auto p-1">
                  <Settings className="h-4 w-4" />
                </Button>

                {/* Date */}
                <div className="mb-4 text-sm opacity-90">{project.date}</div>

                {/* Project Title */}
                <div className="mb-6">
                  <h3 className="mb-1 truncate text-lg leading-tight font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-90">{project.subtitle}</p>
                </div>

                {/* Progress Section */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm opacity-90">Progress</span>
                    <span className="text-sm font-semibold">{project.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/30">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <Progress value={project.progress} indicatorClassName={project.progressColor} />
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between">
                  <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                    {project.team.map((member, i) => (
                      <Avatar key={i}>
                        <AvatarImage src={member.avatar} alt={`${member.id}`} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>

                  <Badge
                    className={`${project.badgeColor} border-0 text-white hover:${project.badgeColor}`}>
                    {project.timeLeft}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
