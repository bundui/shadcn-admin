"use client";

import * as React from "react";
import { GripVertical, Paperclip, MessageSquare, CalendarIcon, PlusCircleIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import * as Kanban from "@/components/ui/kanban";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  assignee?: string;
  dueDate?: string;
  progress: number;
  attachments?: number;
  comments?: number;
  users: TaskUser[];
}

interface TaskUser {
  name: string;
  src: string;
  alt?: string;
  fallback?: string;
}

export default function KanbanBoard() {
  const [columns, setColumns] = React.useState<Record<string, Task[]>>({
    backlog: [
      {
        id: "1",
        title: "Integrate Stripe payment gateway",
        description: "Set up and configure Stripe API for handling credit card transactions.",
        priority: "high",
        assignee: "Emma Johnson",
        dueDate: "2024-09-20",
        users: [
          {
            name: "Emma",
            src: "/avatars/01.jpeg",
            alt: "Emma Avatar",
            fallback: "EJ"
          },
          {
            name: "Daniel",
            src: "/avatars/02.jpeg",
            alt: "Daniel Avatar",
            fallback: "DS"
          }
        ],
        progress: 10,
        attachments: 2,
        comments: 4
      },
      {
        id: "2",
        title: "Redesign marketing homepage",
        description: "Update the homepage with the new brand colors, typography, and hero section.",
        priority: "medium",
        assignee: "Lucas Brown",
        dueDate: "2024-09-25",
        users: [
          {
            name: "Lucas",
            src: "/avatars/03.jpeg",
            alt: "Lucas Avatar",
            fallback: "LB"
          },
          {
            name: "Sophia",
            src: "/avatars/04.jpeg",
            alt: "Sophia Avatar",
            fallback: "SR"
          }
        ],
        progress: 0,
        attachments: 1,
        comments: 1
      },
      {
        id: "3",
        title: "Set up automated backups",
        description: "Implement daily database backups with secure cloud storage.",
        priority: "low",
        assignee: "Mia Williams",
        dueDate: "2024-09-28",
        users: [
          {
            name: "Mia",
            src: "/avatars/05.jpeg",
            alt: "Mia Avatar",
            fallback: "MW"
          },
          {
            name: "Jack",
            src: "/avatars/06.jpeg",
            alt: "Jack Avatar",
            fallback: "JL"
          }
        ],
        progress: 5,
        attachments: 0,
        comments: 3
      },
      {
        id: "4",
        title: "Implement blog search functionality",
        description: "Add a search bar to filter blog posts by title and tags.",
        priority: "medium",
        assignee: "Olivia Davis",
        dueDate: "2024-09-29",
        users: [
          {
            name: "Olivia",
            src: "/avatars/07.jpeg",
            alt: "Olivia Avatar",
            fallback: "OD"
          },
          {
            name: "Henry",
            src: "/avatars/08.jpeg",
            alt: "Henry Avatar",
            fallback: "HT"
          }
        ],
        progress: 0,
        attachments: 1,
        comments: 0
      }
    ],
    inProgress: [
      {
        id: "5",
        title: "Dark mode toggle implementation",
        description: "Allow users to switch between light and dark themes in settings.",
        priority: "high",
        assignee: "Charlie Wilson",
        dueDate: "2024-09-18",
        users: [
          {
            name: "Charlie",
            src: "/avatars/09.jpeg",
            alt: "Charlie Avatar",
            fallback: "CW"
          },
          {
            name: "Ava",
            src: "/avatars/10.jpeg",
            alt: "Ava Avatar",
            fallback: "AR"
          }
        ],
        progress: 40,
        attachments: 2,
        comments: 6
      },
      {
        id: "6",
        title: "Database schema refactoring",
        description: "Normalize tables and improve query performance for large datasets.",
        priority: "medium",
        assignee: "Liam Martinez",
        dueDate: "2024-09-19",
        users: [
          {
            name: "Liam",
            src: "/avatars/11.png",
            alt: "Liam Avatar",
            fallback: "LM"
          },
          {
            name: "Isabella",
            src: "/avatars/12.png",
            alt: "Isabella Avatar",
            fallback: "IN"
          }
        ],
        progress: 55,
        attachments: 3,
        comments: 2
      },
      {
        id: "7",
        title: "Accessibility improvements",
        description: "Ensure the platform meets WCAG 2.1 AA accessibility standards.",
        priority: "low",
        assignee: "Noah Taylor",
        dueDate: "2024-09-22",
        users: [
          {
            name: "Noah",
            src: "/avatars/13.png",
            alt: "Noah Avatar",
            fallback: "NT"
          },
          {
            name: "Ella",
            src: "/avatars/14.png",
            alt: "Ella Avatar",
            fallback: "EL"
          }
        ],
        progress: 35,
        attachments: 1,
        comments: 1
      }
    ],
    done: [
      {
        id: "8",
        title: "Set up CI/CD pipeline",
        description: "Automate deployment process using GitHub Actions and Vercel.",
        priority: "high",
        assignee: "Ethan Clark",
        dueDate: "2024-09-12",
        users: [
          {
            name: "Ethan",
            src: "/avatars/15.png",
            alt: "Ethan Avatar",
            fallback: "EC"
          },
          {
            name: "Grace",
            src: "/avatars/16.png",
            alt: "Grace Avatar",
            fallback: "GR"
          }
        ],
        progress: 100,
        attachments: 2,
        comments: 4
      },
      {
        id: "9",
        title: "Initial project setup",
        description:
          "Create project structure, install dependencies, and configure ESLint/Prettier.",
        priority: "medium",
        assignee: "Harper Lewis",
        dueDate: "2024-09-10",
        users: [
          {
            name: "Harper",
            src: "/avatars/17.png",
            alt: "Harper Avatar",
            fallback: "HL"
          },
          {
            name: "Benjamin",
            src: "/avatars/18.png",
            alt: "Benjamin Avatar",
            fallback: "BM"
          }
        ],
        progress: 100,
        attachments: 1,
        comments: 2
      }
    ]
  });

  const [columnTitles, setColumnTitles] = React.useState<Record<string, string>>({
    backlog: "Backlog",
    inProgress: "In Progress",
    done: "Done"
  });

  function addColumn() {
    const id = `col-${Date.now()}`; // benzersiz id
    setColumns((prev) => ({
      ...prev,
      [id]: [] // boş task listesi
    }));
    setColumnTitles((prev) => ({
      ...prev,
      [id]: `New Column ${Object.keys(prev).length + 1}`
    }));
  }

  return (
    <div className="h-full p-6">
      <div className="mb-4">
        <Button onClick={addColumn}>+ Add Column</Button>
      </div>
      <Kanban.Root value={columns} onValueChange={setColumns} getItemValue={(item) => item.id}>
        <Kanban.Board className="flex w-full gap-4 overflow-x-auto pb-4">
          {Object.entries(columns).map(([columnValue, tasks]) => (
            <Kanban.Column key={columnValue} value={columnValue} className="min-w-[340px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{columnTitles[columnValue]}</span>
                  <Badge variant="secondary">{tasks.length}</Badge>
                </div>
                <div className="flex gap-1">
                  <Kanban.ColumnHandle asChild>
                    <Button variant="ghost" size="icon">
                      <GripVertical className="h-4 w-4" />
                    </Button>
                  </Kanban.ColumnHandle>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <PlusCircleIcon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add Task</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-0.5">
                {tasks.map((task) => (
                  <Kanban.Item key={task.id} value={task.id} asHandle asChild>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base font-semibold">{task.title}</CardTitle>
                        <CardDescription>
                          Compile competitor landing page designs for inspiration. G..
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-muted-foreground flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="size-4" />
                            <span>{task.dueDate}</span>
                          </div>
                          <div className="flex items-center gap-2 rounded-lg border p-1">
                            <div className="relative size-5">
                              <svg
                                className="size-full -rotate-90"
                                viewBox="0 0 36 36"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  fill="none"
                                  className="stroke-current text-gray-200 dark:text-neutral-700"
                                  stroke-width="2"></circle>
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  fill="none"
                                  className={cn("stroke-current", {
                                    "text-green-600!": task.progress === 100,
                                    "text-orange-500!": task.progress > 50 && task.progress < 100
                                  })}
                                  stroke-width="2"
                                  strokeDasharray={2 * Math.PI * 16}
                                  strokeDashoffset={
                                    2 * Math.PI * 16 - (2 * Math.PI * 16 * task.progress) / 100
                                  }
                                  stroke-linecap="round"></circle>
                              </svg>
                            </div>
                            {`${task.progress}%`}
                          </div>
                        </div>

                        <div className="text-muted-foreground flex items-center justify-between border-t border-gray-100 pt-2 text-sm">
                          <div className="flex -space-x-2 overflow-hidden">
                            {task.users.map((user, index) => (
                              <Avatar key={index} className="border-2 border-white">
                                <AvatarImage src={user.src || "/avatars/08.jpeg"} alt={user.alt} />
                                <AvatarFallback>{user.fallback}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Paperclip className="h-4 w-4" />
                              <span>{task.attachments}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{task.comments}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Kanban.Item>
                ))}
              </div>
            </Kanban.Column>
          ))}
        </Kanban.Board>
        <Kanban.Overlay>
          <div className="bg-primary/10 size-full rounded-md" />
        </Kanban.Overlay>
      </Kanban.Root>
    </div>
  );
}
