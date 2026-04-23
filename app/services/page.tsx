import {
  Scissors,
  Sparkles,
  Crown,
  Brush,
  Users,
  DollarSign,
  Clock3,
  TrendingUp,
} from "lucide-react";

const popularServices = [
  {
    title: "Hair Cut & Styling",
    price: "$25",
    duration: "45 mins",
    bookings: 120,
    icon: Scissors,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Hair Coloring",
    price: "$60",
    duration: "90 mins",
    bookings: 80,
    icon: Brush,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Facial Treatment",
    price: "$40",
    duration: "60 mins",
    bookings: 65,
    icon: Sparkles,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Bridal Package",
    price: "$150",
    duration: "180 mins",
    bookings: 20,
    icon: Crown,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Manicure & Pedicure",
    price: "$35",
    duration: "50 mins",
    bookings: 55,
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
];

const categories = [
  "Hair Services",
  "Skin Care",
  "Nail Care",
  "Makeup",
  "Bridal Packages",
  "Spa & Relaxation",
];

const recentActivities = [
  {
    service: "Hair Cut & Styling",
    customer: "Nethmi Perera",
    date: "Today, 10:30 AM",
    status: "Completed",
  },
  {
    service: "Hair Coloring",
    customer: "Sanduni Silva",
    date: "Today, 12:00 PM",
    status: "Pending",
  },
  {
    service: "Facial Treatment",
    customer: "Kavindi Fernando",
    date: "Today, 2:15 PM",
    status: "Completed",
  },
  {
    service: "Bridal Package",
    customer: "Tharushi Jayasekara",
    date: "Tomorrow, 9:00 AM",
    status: "Booked",
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Services</h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage salon services, pricing, popularity, and service activity.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Services</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">24</h2>
            </div>
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Scissors className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Most Booked</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">Hair Cut</h2>
            </div>
            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Duration</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">60 min</h2>
            </div>
            <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
              <Clock3 className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Revenue Share</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">$8,450</h2>
            </div>
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Popular Services</h2>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Add Service
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-gray-100 p-4 transition hover:shadow-md"
                >
                  <div
                    className={`mb-4 inline-flex rounded-xl p-3 ${service.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>

                  <div className="mt-3 space-y-2 text-sm text-gray-500">
                    <p>
                      Price: <span className="font-medium text-gray-700">{service.price}</span>
                    </p>
                    <p>
                      Duration:{" "}
                      <span className="font-medium text-gray-700">
                        {service.duration}
                      </span>
                    </p>
                    <p>
                      Bookings:{" "}
                      <span className="font-medium text-gray-700">
                        {service.bookings}
                      </span>
                    </p>
                  </div>

                  <button className="mt-4 w-full rounded-xl bg-gray-100 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    View Details
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Service Categories
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Quick Summary
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Top Category</span>
                <span className="font-semibold text-gray-800">Hair Services</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Highest Price</span>
                <span className="font-semibold text-gray-800">$150</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Lowest Price</span>
                <span className="font-semibold text-gray-800">$25</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Most Popular</span>
                <span className="font-semibold text-gray-800">
                  Hair Cut & Styling
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Recent Service Activity
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="px-3 py-3 font-medium">Service</th>
                <th className="px-3 py-3 font-medium">Customer</th>
                <th className="px-3 py-3 font-medium">Date</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr
                  key={`${activity.service}-${activity.customer}`}
                  className="border-b last:border-b-0"
                >
                  <td className="px-3 py-4 font-medium text-gray-800">
                    {activity.service}
                  </td>
                  <td className="px-3 py-4 text-gray-600">
                    {activity.customer}
                  </td>
                  <td className="px-3 py-4 text-gray-600">{activity.date}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        activity.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : activity.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;