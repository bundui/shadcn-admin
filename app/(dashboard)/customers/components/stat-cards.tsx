import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, UserPlus, Users } from "lucide-react";

type Props = {
  totalCustomers: number;
  activeCustomers: number;
  newCustomers: number;
};

export default function StatCards({ totalCustomers, activeCustomers, newCustomers }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Users className="text-muted-foreground h-5 w-5" />
            <span className="text-foreground text-2xl font-bold">{totalCustomers}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <UserCheck className="text-muted-foreground h-5 w-5" />
            <span className="text-foreground text-2xl font-bold">{activeCustomers}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>New Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <UserPlus className="text-muted-foreground h-5 w-5" />
            <span className="text-foreground text-2xl font-bold">{newCustomers}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
