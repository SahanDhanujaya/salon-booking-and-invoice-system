import {
  BarChart3,
  DollarSign,
  CalendarDays,
  Users,
  Scissors,
  BrainCircuit,
  TrendingUp,
  TrendingDown,
  Download,
  FileText,
  Sparkles,
} from "lucide-react";

const monthlyRevenue = [
  { month: "Jan", value: 45 },
  { month: "Feb", value: 52 },
  { month: "Mar", value: 48 },
  { month: "Apr", value: 60 },
  { month: "May", value: 72 },
  { month: "Jun", value: 68 },
  { month: "Jul", value: 84 },
];

const topServices = [
  {
    service: "Hair Cut & Styling",
    bookings: 124,
    revenue: "$2,480",
    growth: "+12%",
  },
  {
    service: "Hair Coloring",
    bookings: 82,
    revenue: "$4,920",
    growth: "+18%",
  },
  {
    service: "Facial Treatment",
    bookings: 67,
    revenue: "$2,680",
    growth: "+8%",
  },
  {
    service: "Bridal Package",
    bookings: 18,
    revenue: "$2,700",
    growth: "+22%",
  },
];

const customerInsights = [
  {
    title: "Returning Customers",
    value: "174",
    description: "70% of total customers returned this month",
    trend: "up",
  },
  {
    title: "New Customers",
    value: "32",
    description: "New customer growth is steady this month",
    trend: "up",
  },
  {
    title: "Low Activity Segment",
    value: "14",
    description: "Customers who have not rebooked in 30 days",
    trend: "down",
  },
];

const aiInsights = [
  {
    title: "Revenue Opportunity",
    description:
      "Hair coloring and bridal packages are driving the highest revenue. Promoting premium packages can increase profit further.",
    color: "bg-green-50 border-green-100 text-green-700",
  },
  {
    title: "Demand Pattern",
    description:
      "Friday evenings and Saturday mornings remain the busiest periods. Tuesday afternoons show the lowest utilization.",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    title: "AI Recommendation",
    description:
      "Run a midweek promotion for facial and manicure services, and assign more staff during weekend peak hours.",
    color: "bg-purple-50 border-purple-100 text-purple-700",
  },
];

const recentReports = [
  {
    report: "Monthly Revenue Report",
    generatedOn: "2026-04-22",
    type: "Revenue",
    status: "Completed",
  },
  {
    report: "Customer Retention Analysis",
    generatedOn: "2026-04-21",
    type: "Customer",
    status: "Completed",
  },
  {
    report: "Service Performance Report",
    generatedOn: "2026-04-20",
    type: "Service",
    status: "Completed",
  },
  {
    report: "AI Weekly Business Insight",
    generatedOn: "2026-04-19",
    type: "AI Analysis",
    status: "Completed",
  },
];

const ReportsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Reports</h1>
          <p className="mt-2 text-sm text-gray-500">
            Analyze salon revenue, services, customer trends, and AI-powered
            business insights.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            <Download className="h-4 w-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100">
            <FileText className="h-4 w-4" />
            Generate AI Report
          </button>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Monthly Revenue</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">$18,450</h2>
              <p className="mt-1 text-xs font-medium text-green-600">+18.2%</p>
            </div>
            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Appointments</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">342</h2>
              <p className="mt-1 text-xs font-medium text-blue-600">+9.4%</p>
            </div>
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <CalendarDays className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Customers</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">248</h2>
              <p className="mt-1 text-xs font-medium text-purple-600">+12 new</p>
            </div>
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Top Service</p>
              <h2 className="mt-2 text-xl font-bold text-gray-800">
                Hair Coloring
              </h2>
              <p className="mt-1 text-xs font-medium text-pink-600">
                Highest revenue
              </p>
            </div>
            <div className="rounded-xl bg-pink-100 p-3 text-pink-600">
              <Scissors className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 space-y-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Revenue Analytics
                </h2>
                <p className="text-sm text-gray-500">
                  Monthly revenue performance
                </p>
              </div>
              <div className="rounded-xl bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700">
                Last 7 Months
              </div>
            </div>

            <div className="flex h-72 items-end gap-3">
              {monthlyRevenue.map((item) => (
                <div
                  key={item.month}
                  className="flex flex-1 flex-col items-center justify-end"
                >
                  <div className="mb-3 text-xs font-medium text-gray-500">
                    {item.value}%
                  </div>
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-blue-600 to-cyan-400"
                    style={{ height: `${item.value * 2.2}px` }}
                  />
                  <div className="mt-3 text-sm font-medium text-gray-600">
                    {item.month}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">
                Service Performance
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-gray-500">
                    <th className="px-3 py-3 font-medium">Service</th>
                    <th className="px-3 py-3 font-medium">Bookings</th>
                    <th className="px-3 py-3 font-medium">Revenue</th>
                    <th className="px-3 py-3 font-medium">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {topServices.map((item) => (
                    <tr
                      key={item.service}
                      className="border-b last:border-b-0"
                    >
                      <td className="px-3 py-4 font-medium text-gray-800">
                        {item.service}
                      </td>
                      <td className="px-3 py-4 text-gray-600">
                        {item.bookings}
                      </td>
                      <td className="px-3 py-4 font-medium text-gray-800">
                        {item.revenue}
                      </td>
                      <td className="px-3 py-4">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                          {item.growth}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-600" />
              <h2 className="text-xl font-bold text-gray-800">
                AI Business Insights
              </h2>
            </div>

            <div className="space-y-4">
              {aiInsights.map((insight) => (
                <div
                  key={insight.title}
                  className={`rounded-2xl border p-4 ${insight.color}`}
                >
                  <h3 className="text-sm font-semibold">{insight.title}</h3>
                  <p className="mt-2 text-sm leading-7">
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-violet-900 p-5 text-white shadow-sm">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-cyan-300" />
              <h2 className="text-xl font-bold">AI Report Summary</h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-200">
              AI detected that premium services are growing faster than basic
              services. Weekend demand is close to full capacity, while weekday
              afternoon utilization remains low.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-slate-200">Predicted Best Day</p>
                <h3 className="mt-2 text-lg font-semibold">Saturday</h3>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-slate-200">AI Confidence</p>
                <h3 className="mt-2 text-lg font-semibold">91%</h3>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-slate-200">Risk Level</p>
                <h3 className="mt-2 text-lg font-semibold">Low</h3>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-slate-200">Next Action</p>
                <h3 className="mt-2 text-lg font-semibold">Boost Tuesday</h3>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Customer Insights
            </h2>

            <div className="space-y-4">
              {customerInsights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </p>
                    {item.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-gray-800">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Quick Recommendations
            </h2>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="rounded-xl bg-amber-50 p-4">
                Promote facial packages during Tuesday afternoons.
              </div>
              <div className="rounded-xl bg-blue-50 p-4">
                Add one more stylist for Saturday morning slots.
              </div>
              <div className="rounded-xl bg-green-50 p-4">
                Focus ads on hair coloring and bridal packages.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Recent Reports</h2>
          <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="px-3 py-3 font-medium">Report</th>
                <th className="px-3 py-3 font-medium">Generated On</th>
                <th className="px-3 py-3 font-medium">Type</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => (
                <tr key={report.report} className="border-b last:border-b-0">
                  <td className="px-3 py-4 font-medium text-gray-800">
                    {report.report}
                  </td>
                  <td className="px-3 py-4 text-gray-600">
                    {report.generatedOn}
                  </td>
                  <td className="px-3 py-4 text-gray-600">{report.type}</td>
                  <td className="px-3 py-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                      {report.status}
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

export default ReportsPage;