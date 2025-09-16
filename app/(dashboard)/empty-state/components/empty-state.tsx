import { FolderPlus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyState() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <FolderPlus className="mx-auto h-16 w-16 text-gray-400" />
        <h2 className="mt-6 text-xl font-semibold text-gray-900">No projects</h2>
        <p className="mt-2 text-sm text-gray-500">Get started by creating a new project.</p>
        <div className="mt-6">
          <Button className="focus:ring-primary inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none">
            <Plus className="mr-2 -ml-1 h-5 w-5" />
            New Project
          </Button>
        </div>
      </div>
    </div>
  );
}
