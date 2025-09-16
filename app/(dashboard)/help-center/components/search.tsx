import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <SearchIcon className="size-5 text-muted-foreground" />
      </div>
      <Input
        type="text"
        placeholder="Enter a question, topic or keyword"
        className="pl-12 h-14 text-base bg-background border-search-border rounded-full text-hero-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-hero-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-hero"
      />
    </div>
  );
};

export default Search;