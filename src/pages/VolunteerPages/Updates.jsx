import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Updates = () => {
  const data = [
    { month: "Jan", projects: 80 },
    { month: "Feb", projects: 100 },
    { month: "Mar", projects: 90 },
    { month: "Apr", projects: 110 },
    { month: "May", projects: 137 },
    { month: "Jun", projects: 105 },
    { month: "Jul", projects: 98 },
    { month: "Aug", projects: 92 },
    { month: "Sep", projects: 85 },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100 min-h-screen">
      {/* Stats Cards */}
      {[ 
        { title: "Active Employees", value: 547 },
        { title: "Number of Projects", value: 339 },
        { title: "Number of Tasks", value: 147 },
        { title: "Target Percentage Completed", value: "89.75%" },
      ].map((stat, index) => (
        <div key={index} className="p-6 text-center bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">{stat.title}</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stat.value}</p>
        </div>
      ))}

      {/* Ongoing Tasks */}
      <div className="col-span-2 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Ongoing Tasks</h2>
        <div className="space-y-4">
          {["Journey Scarves", "Edifier", "Ugreen", "CNN"].map((task, index) => (
            <div key={index} className="p-4 flex justify-between bg-gray-50 shadow-sm rounded-md hover:bg-gray-100 transition">
              <div>
                <h3 className="text-md font-semibold text-gray-800">{task}</h3>
                <p className="text-sm text-gray-500">Rebranding & Web Design</p>
              </div>
              <p className="text-sm font-semibold text-gray-600">Due: Aug {15 + index}, 2024</p>
            </div>
          ))}
        </div>
      </div>

      {/* Graphs and Analysis */}
      <div className="col-span-2 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Graphs and Analysis</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip cursor={{ fill: "#f0f0f0" }} />
            <Bar dataKey="projects" fill="#3498db" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Performance Ranking */}
      <div className="col-span-2 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Top Performance</h2>
        <div className="flex justify-around">
          {["Melissa", "Jonathan", "Yvonne", "Chris"].map((name, index) => (
            <div key={index} className="text-center">
              <p className="text-xl font-bold text-blue-500">{index + 1}st</p>
              <p className="text-md font-semibold text-gray-700">{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Task Allocation for Volunteers */}
      <div className="col-span-2 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Task Allocation for Volunteers</h2>
        <div className="space-y-4">
          {[
            { name: "Alice", task: "Distribute Aid Packages", status: "In Progress" },
            { name: "Bob", task: "Coordinate Shelter Assignments", status: "Pending" },
            { name: "Charlie", task: "Medical Assistance Support", status: "Completed" }
          ].map((volunteer, index) => (
            <div key={index} className="p-4 flex justify-between bg-gray-50 shadow-sm rounded-md hover:bg-gray-100 transition">
              <div>
                <h3 className="text-md font-semibold text-gray-800">{volunteer.name}</h3>
                <p className="text-sm text-gray-500">{volunteer.task}</p>
              </div>
              <p className={`text-sm font-semibold ${volunteer.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>{volunteer.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;
