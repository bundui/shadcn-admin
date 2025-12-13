"use client";

import { useState } from "react";
import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState
} from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  ChevronUp,
  ChevronDown,
  Search,
  Download,
  Plus,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { generateMeta } from "@/lib/generate-meta";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Product List",
    description:
      "A list of products created using the Tanstack Table. Built with Tailwind CSS and Next.js.",
    canonical: "/products"
  });
}

type Product = {
  id: string;
  name: string;
  image: string;
  productId: string;
  category: string;
  price: number;
  stock: number;
  sold: number;
  status: "In Stock" | "Out of Stock" | "Restock";
};

const products: Product[] = [
  {
    id: "1",
    name: "Ohio Jacket",
    image: "🧥",
    productId: "#EP5659",
    category: "Jacket",
    price: 90.99,
    stock: 132,
    sold: 592,
    status: "In Stock"
  },
  {
    id: "2",
    name: "Urban Explorer Watch",
    image: "⌚",
    productId: "#AP2589",
    category: "Watch",
    price: 101.5,
    stock: 0,
    sold: 593,
    status: "Out of Stock"
  },
  {
    id: "3",
    name: "Echo Sports Cap",
    image: "🧢",
    productId: "#4A90E2",
    category: "Cap",
    price: 75.25,
    stock: 134,
    sold: 594,
    status: "Restock"
  },
  {
    id: "4",
    name: "Skyline Sunglasses",
    image: "🕶️",
    productId: "#50E3C2",
    category: "Sunglass",
    price: 88.1,
    stock: 0,
    sold: 595,
    status: "Out of Stock"
  },
  {
    id: "5",
    name: "Redwood Backpack",
    image: "🎒",
    productId: "#B8E986",
    category: "Bag",
    price: 120.0,
    stock: 136,
    sold: 596,
    status: "In Stock"
  },
  {
    id: "6",
    name: "Midnight Beanie",
    image: "🎩",
    productId: "#F5A623",
    category: "Cap",
    price: 45.0,
    stock: 137,
    sold: 597,
    status: "Restock"
  },
  {
    id: "7",
    name: "Vintage Denim Jacket",
    image: "🧥",
    productId: "#7ED321",
    category: "Jacket",
    price: 67.3,
    stock: 0,
    sold: 598,
    status: "Out of Stock"
  },
  {
    id: "8",
    name: "Canyon Running Shoes",
    image: "👟",
    productId: "#D0021B",
    category: "Shoes",
    price: 150.75,
    stock: 139,
    sold: 599,
    status: "In Stock"
  },
  {
    id: "9",
    name: "Classic Leather Belt",
    image: "👔",
    productId: "#A1B2C3",
    category: "Accessories",
    price: 35.0,
    stock: 245,
    sold: 312,
    status: "In Stock"
  },
  {
    id: "10",
    name: "Sports Hoodie",
    image: "🧥",
    productId: "#D4E5F6",
    category: "Jacket",
    price: 85.5,
    stock: 0,
    sold: 428,
    status: "Out of Stock"
  },
  {
    id: "11",
    name: "Aviator Sunglasses",
    image: "🕶️",
    productId: "#G7H8I9",
    category: "Sunglass",
    price: 120.0,
    stock: 56,
    sold: 189,
    status: "Restock"
  },
  {
    id: "12",
    name: "Canvas Tote Bag",
    image: "👜",
    productId: "#J0K1L2",
    category: "Bag",
    price: 45.99,
    stock: 89,
    sold: 267,
    status: "In Stock"
  },
  {
    id: "13",
    name: "Wireless Earbuds",
    image: "🎧",
    productId: "#M3N4O5",
    category: "Electronics",
    price: 199.99,
    stock: 0,
    sold: 534,
    status: "Out of Stock"
  }
];

const categories = [...new Set(products.map((p) => p.category))];
const statuses: Product["status"][] = ["In Stock", "Out of Stock", "Restock"];

const statsData = [
  {
    title: "Total Products",
    value: "12,528",
    change: "+295",
    changeType: "increase",
    label: "Last month"
  },
  {
    title: "Product Revenue",
    value: "$16,952",
    change: "+32.00%",
    changeType: "increase",
    label: "Last month"
  },
  {
    title: "Monthly Sales",
    value: "1,298",
    change: "-16.22%",
    changeType: "decrease",
    label: "Last month"
  }
];

function MiniChart({ trend }: { trend: "up" | "down" }) {
  return (
    <svg width="80" height="40" viewBox="0 0 80 40" className="text-foreground">
      <path
        d={trend === "up" ? "M0 35 Q20 30 30 25 T50 15 T80 5" : "M0 5 Q20 10 30 20 T50 30 T80 35"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function StatsCard({ item }: { item: (typeof statsData)[0] }) {
  return (
    <Card>
      <CardContent>
        <p className="text-muted-foreground mb-2 text-sm">{item.title}</p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-semibold">{item.value}</p>
            <p className="mt-1 text-sm">
              <span className={item.changeType === "increase" ? "text-green-600" : "text-red-500"}>
                {item.changeType === "increase" ? "▲" : "▼"}
                {item.change}
              </span>
              <span className="text-muted-foreground ml-1">{item.label}</span>
            </p>
          </div>
          <MiniChart trend={item.changeType === "increase" ? "up" : "down"} />
        </div>
      </CardContent>
    </Card>
  );
}

function StatusBadge({ status }: { status: Product["status"] }) {
  const variants: Record<Product["status"], string> = {
    "In Stock": "bg-green-50 text-green-700 border-green-200",
    "Out of Stock": "bg-red-50 text-red-600 border-red-200",
    Restock: "bg-yellow-50 text-yellow-700 border-yellow-200"
  };

  return (
    <Badge variant="outline" className={variants[status]}>
      {status}
    </Badge>
  );
}

function SortIcon({ column }: { column: { getIsSorted: () => false | "asc" | "desc" } }) {
  const sorted = column.getIsSorted();
  return (
    <span className="ml-1 inline-flex flex-col">
      <ChevronUp
        className={`-mb-1 h-3 w-3 ${sorted === "asc" ? "text-foreground" : "text-muted-foreground/40"}`}
      />
      <ChevronDown
        className={`h-3 w-3 ${sorted === "desc" ? "text-foreground" : "text-muted-foreground/40"}`}
      />
    </span>
  );
}

export function ProductList() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredData = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
      const matchesStatus = statusFilter === "all" || product.status === statusFilter;
      return matchesCategory && matchesStatus;
    });
  }, [categoryFilter, statusFilter]);

  const columns: ColumnDef<Product>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />
      ),
      enableSorting: false
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <button className="flex items-center" onClick={() => column.toggleSorting()}>
          Product <SortIcon column={column} />
        </button>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <span className="text-2xl">{row.original.image}</span>
          <span className="font-medium">{row.original.name}</span>
        </div>
      )
    },
    {
      accessorKey: "productId",
      header: ({ column }) => (
        <button className="flex items-center" onClick={() => column.toggleSorting()}>
          ID <SortIcon column={column} />
        </button>
      )
    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        <button className="flex items-center" onClick={() => column.toggleSorting()}>
          Category <SortIcon column={column} />
        </button>
      )
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <button className="flex items-center" onClick={() => column.toggleSorting()}>
          Price <SortIcon column={column} />
        </button>
      ),
      cell: ({ row }) => `$${row.original.price.toFixed(2)}`
    },
    {
      accessorKey: "stock",
      header: ({ column }) => (
        <button className="flex items-center" onClick={() => column.toggleSorting()}>
          Stock <SortIcon column={column} />
        </button>
      )
    },
    {
      accessorKey: "sold",
      header: ({ column }) => (
        <button className="flex items-center" onClick={() => column.toggleSorting()}>
          Sold <SortIcon column={column} />
        </button>
      )
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <button className="flex items-center" onClick={() => column.toggleSorting()}>
          Status <SortIcon column={column} />
        </button>
      ),
      cell: ({ row }) => <StatusBadge status={row.original.status} />
    },
    {
      id: "action",
      header: "Action",
      cell: () => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { sorting, globalFilter, rowSelection, columnFilters },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: { pagination: { pageSize: 8 } }
  });

  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {statsData.map((item) => (
          <StatsCard key={item.title} item={item} />
        ))}
      </div>

      <Card>
        <CardContent>
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row">
            <div className="relative w-full sm:w-64">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Product
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <span>Show</span>
              <Select
                value={String(table.getState().pagination.pageSize)}
                onValueChange={(value) => table.setPageSize(Number(value))}>
                <SelectTrigger className="h-8 w-16">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[8, 10, 20, 50].map((size) => (
                    <SelectItem key={size} value={String(size)}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span>Product per page</span>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: Math.min(5, pageCount) }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => table.setPageIndex(page - 1)}>
                  {page}
                </Button>
              ))}
              {pageCount > 5 && (
                <>
                  <span className="text-muted-foreground px-2">...</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => table.setPageIndex(pageCount - 1)}>
                    {pageCount}
                  </Button>
                </>
              )}
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
