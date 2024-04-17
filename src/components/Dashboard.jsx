function Dashboard() {
  return (
    <div className="main-dashboard">
      <div className="px-10 py-10">
        <div className="my-5">
          <h2 className="text-4xl font-bold">Account Dashboard</h2>
        </div>
        <div className="flex basis-60 flex-wrap">
          {Array.from({ length: 13 }, (_, i) => i + 1).map((i) => (
            <div
              key={Math.random()}
              className="m-5 flex h-24 w-60 flex-col justify-center  border-2 pl-2 transition hover:bg-gray-50"
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
