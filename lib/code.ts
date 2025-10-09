import fs from "fs";
import path from "path";

export const extractCodeFromFilePath = (filePath: string) => {
  const fullPath = path.resolve(process.cwd(), "components", filePath);
  return fs.readFileSync(fullPath, "utf-8");
};

export type FileEntry = {
  name: string;
  path: string;
  type: "file" | "directory";
  children?: FileEntry[];
};

export const getFilesInDirectory = (directoryPath: string): FileEntry[] => {
  const fullPath = path.resolve(process.cwd(), "components", directoryPath);
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });

  const filesAndDirs: FileEntry[] = entries.map((entry) => {
    const relativePath = path.join(directoryPath, entry.name).replace(/\\/g, "/");

    if (entry.isDirectory()) {
      return {
        name: entry.name,
        path: relativePath,
        type: "directory",
        children: getFilesInDirectory(relativePath)
      };
    } else {
      return {
        name: entry.name,
        path: relativePath,
        type: "file"
      };
    }
  });

  return filesAndDirs.sort((a, b) => {
    if (a.type === "directory" && b.type === "file") return -1;
    if (a.type === "file" && b.type === "directory") return 1;

    const isAIndex = a.name.startsWith("index");
    const isBIndex = b.name.startsWith("index");

    const isAUnimportant = a.name.includes("type") || a.name.includes("data");
    const isBUnimportant = b.name.includes("type") || b.name.includes("data");

    if (isAIndex) return -1;
    if (isBIndex) return 1;

    if (isAUnimportant && !isBUnimportant) return 1;
    if (!isAUnimportant && isBUnimportant) return -1;

    return 0;
  });
};
