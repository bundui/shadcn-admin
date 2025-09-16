"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Bookmark,
  MapPin,
  Clock,
  Users,
  Briefcase,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface JobPosting {
  id: string;
  company: string;
  logo: string;
  position: string;
  location: string;
  salary: string;
  type: string;
  level: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  applicants: string;
  verified: string;
  postedTime: string;
  companyColor: string;
}

const jobPostings: JobPosting[] = [
  {
    id: "1",
    company: "Dropbox",
    logo: "📦",
    position: "UI Designer",
    location: "San Francisco, CA - Remote",
    salary: "$120k - $150k",
    type: "Full-Time",
    level: "Senior",
    description:
      "We are seeking a talented UI Designer to join our team. This is an exciting opportunity to work on cutting-edge projects and make a significant impact on our product.",
    responsibilities: [
      "Design and implement user-centered interfaces for web and mobile applications.",
      "Collaborate with product managers and engineers to define and implement innovative solutions for the product direction, visuals and experience.",
      "Execute all visual design stages from concept to final hand-off to engineering.",
      "Conceptualize original ideas that bring simplicity and user friendliness to complex design roadblocks.",
      "Create wireframes, storyboards, user flows, process flows and site maps to effectively communicate interaction and design ideas."
    ],
    requirements: [
      "5+ years of experience in UI/UX design, proficiency in Figma, and a strong portfolio.",
      "Strong portfolio demonstrating user-centered design process",
      "Excellent communication and collaboration skills",
      "Experience with modern design tools and processes",
      "Ability to work effectively in a fast-paced environment"
    ],
    applicants: "20 / 50",
    verified: "Verified $100,000+ spent",
    postedTime: "2d ago",
    companyColor: "bg-blue-500"
  },
  {
    id: "2",
    company: "Airbnb",
    logo: "🏠",
    position: "Product Designer",
    location: "New York, NY - Hybrid",
    salary: "$130k - $160k",
    type: "Full-Time",
    level: "Mid-Senior",
    description:
      "3+ years of product design experience, strong problem-solving skills, and experience with design systems.",
    responsibilities: [],
    requirements: [],
    applicants: "15 / 30",
    verified: "Verified $200,000+ spent",
    postedTime: "1w ago",
    companyColor: "bg-red-500"
  },
  {
    id: "3",
    company: "Spotify",
    logo: "🎵",
    position: "UX Researcher",
    location: "Stockholm, Sweden - Onsite",
    salary: "€70k - €90k",
    type: "Full-Time",
    level: "Mid-Level",
    description:
      "3+ years of UX research experience, proficiency in qualitative and quantitative research methods.",
    responsibilities: [],
    requirements: [],
    applicants: "8 / 25",
    verified: "Verified €150,000+ spent",
    postedTime: "3d ago",
    companyColor: "bg-green-500"
  }
];

export default function JobPostings() {
  const [selectedJob, setSelectedJob] = useState<JobPosting>(jobPostings[0]);
  const [searchQuery, setSearchQuery] = useState("UI Designer");

  return (
    <div className="flex">
      {/* Left Sidebar - Job Listings */}
      <div className="flex w-96 flex-col border-e">
        {/* Search Header */}
        <div className="border-b border-gray-200 p-4">
          <div className="relative mb-4">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input
              placeholder="UI Designer"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-4 pl-10"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-1/2 right-2 -translate-y-1/2 transform">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="inline-block rounded-full bg-black px-3 py-1 text-sm font-medium text-white">
            Search Result 6 Jobs Found
          </div>
        </div>

        {/* Job Listings */}
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {jobPostings.map((job) => (
            <Card
              key={job.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedJob.id === job.id ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setSelectedJob(job)}>
              <CardContent>
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`h-12 w-12 rounded-lg ${job.companyColor} flex items-center justify-center text-xl text-white`}>
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{job.company}</h3>
                      <p className="text-muted-foreground text-sm">{job.position}</p>
                      <p className="text-xs text-gray-500">{job.location}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mb-3 flex flex-wrap gap-2">
                  <Badge variant="secondary">{job.salary}</Badge>
                  <Badge variant="secondary">{job.type}</Badge>
                  <Badge variant="secondary">{job.level}</Badge>
                </div>

                <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">{job.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{job.verified}</span>
                  <span>{job.postedTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content - Job Details */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {/* Job Header */}
        <Card>
          <CardContent>
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`h-16 w-16 rounded-lg ${selectedJob.companyColor} flex items-center justify-center text-2xl text-white`}>
                  {selectedJob.logo}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{selectedJob.company}</h1>
                  <p className="text-muted-foreground text-lg">{selectedJob.position}</p>
                  <p className="mt-1 flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    {selectedJob.location}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Bookmark className="h-5 w-5" />
              </Button>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Salary:</p>
                  <p className="font-semibold">{selectedJob.salary}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Job Type:</p>
                  <p className="font-semibold">{selectedJob.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Applicants:</p>
                  <p className="font-semibold">{selectedJob.applicants}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Experience:</p>
                  <p className="font-semibold">{selectedJob.level}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Description */}
        <Card>
          <CardHeader>
            <CardTitle>Job Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{selectedJob.description}</p>

            {selectedJob.responsibilities.length > 0 && (
              <ol className="text-muted-foreground space-y-2">
                {selectedJob.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    {responsibility}
                  </li>
                ))}
              </ol>
            )}
          </CardContent>
        </Card>

        {/* Requirements */}
        {selectedJob.requirements.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                {selectedJob.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    {requirement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Button className="w-full">Apply Now</Button>
      </div>

      {/* Right Sidebar - User Profile */}
      <div className="w-80 border-l border-gray-200 bg-white p-6">
        {/* User Profile */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/avatars/08.jpeg" />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Revaldo</h3>
              <p className="text-muted-foreground text-sm">UI Designer</p>
              <p className="text-xs text-gray-500">Surakarta, Central Java, ID</p>
            </div>
          </div>
        </div>

        <Button variant="outline" className="mb-6 w-full bg-transparent">
          Edit Profile
        </Button>

        <Separator className="mb-6" />

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Search Result</p>
            <p className="text-2xl font-bold">22</p>
            <p className="text-xs text-gray-500">Views</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Applied Job</p>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-gray-500">Job</p>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Post Views</p>
            <p className="text-2xl font-bold">268</p>
            <p className="text-xs text-gray-500">Views</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Experience</p>
            <p className="text-2xl font-bold">5</p>
            <p className="text-xs text-gray-500">Month</p>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 text-sm">345 Profile View</p>

        {/* Dashboard Preview */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/dashboard-preview.png"
            alt="Dashboard Preview"
            width={300}
            height={200}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
