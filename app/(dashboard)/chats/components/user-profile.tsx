import { Download } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface User {
  id: string;
  name: string;
  avatar: string;
  status: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  sharedFiles: Array<{
    name: string;
    type: string;
  }>;
}

interface UserProfileProps {
  user: User;
  onClose: () => void;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="flex w-80 flex-col border-l border-gray-200 bg-white">
      {/* Profile Header */}
      <div className="p-6 text-center">
        <div className="relative inline-block">
          <Avatar className="mx-auto h-20 w-20">
            <AvatarImage src={user.avatar || "/avatars/08.jpeg"} alt={user.name} />
            <AvatarFallback className="text-lg">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="absolute right-1 bottom-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></div>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-900">{user.name}</h2>
        <p className="text-sm text-green-600">{user.status}</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6">
        {/* Bio Section */}
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-medium text-gray-900">Bio</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{user.bio}</p>
        </div>

        <Separator className="my-6" />

        {/* Contact Information */}
        <div className="space-y-4">
          <div>
            <h3 className="mb-1 text-sm font-medium text-gray-900">Email</h3>
            <p className="text-muted-foreground text-sm">{user.email}</p>
          </div>

          <div>
            <h3 className="mb-1 text-sm font-medium text-gray-900">Phone</h3>
            <p className="text-muted-foreground text-sm">{user.phone}</p>
          </div>

          <div>
            <h3 className="mb-1 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-muted-foreground text-sm">{user.location}</p>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Shared Files */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-gray-900">Shared Files</h3>
          <div className="space-y-3">
            {user.sharedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg p-2 hover:bg-gray-50">
                <span className="truncate text-sm text-gray-700">{file.name}</span>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
