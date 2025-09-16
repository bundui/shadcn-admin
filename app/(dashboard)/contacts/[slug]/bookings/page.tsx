import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Page() {
  const bookings = [
    {
      date: "Mon May 12, 2025",
      time: "6:00 - 6:30 AM",
      service: "The Massage",
      status: "Booked",
      clients: "Alexa Cobb, Ally McBride"
    },
    {
      date: "Sun May 24, 2025",
      time: "12:30 - 1:15 PM",
      service: "Pilates Plus",
      status: "Booked",
      clients: "Me B"
    },
    {
      date: "Sun May 24, 2025",
      time: "12:30 - 1:15 PM",
      service: "Pilates Plus",
      status: "Booked",
      clients: "2/8"
    },
    {
      date: "Sat May 23, 2025",
      time: "8:30 - 9:40 AM",
      service: "Pilates Plus",
      status: "Booked",
      clients: "1/8"
    },
    {
      date: "Wed Mar 26, 2025",
      time: "",
      service: "Core Blaster (60%)",
      status: "Booked",
      clients: "1/8"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Bookings</CardTitle>
        <CardDescription>Upcoming and recent bookings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left font-medium text-gray-700">Event</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Service</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Clients/Attendees</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{booking.date}</div>
                      {booking.time && (
                        <div className="text-muted-foreground text-sm">{booking.time}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-900">{booking.service}</td>
                  <td className="px-4 py-4">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {booking.status}
                    </Badge>
                  </td>
                  <td className="text-muted-foreground px-4 py-4">{booking.clients}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
