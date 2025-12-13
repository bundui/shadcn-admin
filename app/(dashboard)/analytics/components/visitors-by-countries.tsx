import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { ArrowUp, ArrowDown } from "lucide-react";

const items = [
  { rank: 1, country: "USA", flag: "🇺🇸", visitors: 45234, change: 2.15 },
  { rank: 2, country: "Argentina", flag: "🇦🇷", visitors: 12234, change: 1.62 },
  { rank: 3, country: "Italy", flag: "🇮🇹", visitors: 7234, change: -0.85 },
  { rank: 4, country: "Russia", flag: "🇷🇺", visitors: 3543, change: 3.51 },
  { rank: 5, country: "Spain", flag: "🇪🇸", visitors: 2463, change: 0.56 },
  { rank: 6, country: "Uae", flag: "🇦🇪", visitors: 1832, change: 1.92 }
];

export function VisitorsByCountries() {
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Visitors By Countries</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="border-t">
              <TableHead className="text-muted-foreground w-20 text-center font-medium">
                S.No
              </TableHead>
              <TableHead className="text-muted-foreground font-medium">Country</TableHead>
              <TableHead className="text-muted-foreground text-right font-medium">
                Visitors
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.rank} className="border-b">
                <TableCell className="text-muted-foreground text-center font-medium">
                  {item.rank}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.flag}</span>
                    <span className="font-semibold">{item.country}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span
                      className={`flex items-center text-sm ${
                        item.change >= 0 ? "text-green-500" : "text-red-500"
                      }`}>
                      (
                      {item.change >= 0 ? (
                        <ArrowUp className="h-3 w-3" />
                      ) : (
                        <ArrowDown className="h-3 w-3" />
                      )}
                      {Math.abs(item.change).toFixed(2)}%)
                    </span>
                    <span className="min-w-16 text-right font-semibold">
                      {formatNumber(item.visitors)}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
