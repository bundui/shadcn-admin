"use client";

import WorldMap, { CountryContext } from "react-svg-worldmap";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { CardOptionsMenu } from "@/components/CardActionMenus";

const data = [
  { country: "cn", value: 208679114, color: "red" },
  { country: "us", value: 161062905 },
  { country: "ru", value: 141944641 },
  { country: "id", value: 127318112 },
  { country: "in", value: 1311559204 }
];

const countries = [
  {
    id: 1,
    country: "China",
    lead_count: "430",
    bounce_rate: "5.9%"
  },
  {
    id: 2,
    country: "ABD",
    lead_count: "435",
    bounce_rate: "3%"
  },
  {
    id: 3,
    country: "Russia",
    lead_count: "982",
    bounce_rate: "4.8%"
  },
  {
    id: 4,
    country: "Indonesia",
    lead_count: "542",
    bounce_rate: "2.3%"
  },
  {
    id: 5,
    country: "India",
    lead_count: "742",
    bounce_rate: "5%"
  }
];

const getStyle = ({ countryCode }: CountryContext) => {
  let fillColor = "var(--muted)";
  switch (countryCode) {
    case "RU":
      fillColor = "var(--chart-1)";
      break;
    case "US":
      fillColor = "var(--chart-2)";
      break;
    case "CN":
      fillColor = "var(--chart-3)";
      break;
    case "ID":
      fillColor = "var(--chart-4)";
      break;
    case "IN":
      fillColor = "var(--chart-5)";
      break;

    default:
      break;
  }
  return {
    fill: fillColor,
    stroke: "var(--primary)",
    strokeWidth: 1,
    strokeOpacity: 0.2,
    cursor: "pointer"
  };
};

export function LeadsByCountryCard() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>Lead by Countries</CardTitle>
        <CardOptionsMenu />
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className="grid items-center gap-4 lg:grid-cols-2">
          <div className="flex justify-center">
            {isClient ? (
              <WorldMap
                backgroundColor="hsl(var(--background))"
                value-suffix="people"
                data={data}
                size="md"
                styleFunction={getStyle}
              />
            ) : null}
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>User</TableHead>
                <TableHead className="text-right">Bounce Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {countries.map((country) => (
                <TableRow key={country.id}>
                  <TableCell className="font-medium">{country.country}</TableCell>
                  <TableCell>{country.lead_count}</TableCell>
                  <TableCell className="text-right">{country.bounce_rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
