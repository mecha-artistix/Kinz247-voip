function Dashboard() {
  return (
    <div className="main-dashboard">
      <div className="px-10 py-10">
        <div className="my-5">
          <h2 className="text-4xl font-bold">Account Dashboard</h2>
        </div>
        <div className="flex flex-wrap basis-60">
          {Array.from({ length: 13 }, (_, i) => i + 1).map((i) => (
            <div
              key={Math.random()}
              className="w-60 h-24 border-2 m-5 pl-2 flex justify-center flex-col hover:bg-gray-50 transition"
            >
              <p className="text-xl font-semibold">Customers</p>
              <p className="text-lg font-bold">1234</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
