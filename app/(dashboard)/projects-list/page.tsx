import { Metadata } from "next";
import { Plus } from "lucide-react";
import { generateMeta } from "@/lib/generate-meta";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <header className="mb-8 flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Projects Board</h1>
            <p className="text-muted-foreground text-sm">List of your ongoing projects</p>
          </div>
          <Button>
            <Plus />
            New Project
          </Button>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Date */}
                <div className="text-muted-foreground mb-4 text-sm">{project.date}</div>

                {/* Progress Section */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm opacity-90">Progress</span>
                    <span className="text-sm font-semibold">{project.progress}%</span>
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
