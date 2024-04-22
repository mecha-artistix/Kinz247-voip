import { FakeTable } from "../assets/FakeTable";

function AccountDashboard() {
  return (
    <>
      <div className="h-full overflow-auto  border">
        <table className="h-144  table-fixed">
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Account ID</th>
              <th>Balance</th>
              <th>ASR</th>
              <th>SDP</th>
              <th>Spent</th>
              <th>Profit</th>
              <th>Margin</th>
              <th>Sessions</th>
              <th>Gain Loss %</th>
            </tr>
          </thead>
          <tbody>
            {FakeTable.map((row) => (
              <TableRow row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AccountDashboard;

function TableRow({ row, indent = 0 }) {
  const padding = 20 * indent + "px";
  const childKey = Object.keys(row).find((key) => Array.isArray(row[key]));
  return (
    <>
      <tr>
        {Object.entries(row).map(([key, value], index) => {
          if (key !== childKey) {
            return (
              <td
                style={index === 0 ? { paddingLeft: padding } : {}}
                key={key}
                className="border-b"
              >
                {value}
              </td>
            );
          }
          return null;
        })}
      </tr>
      {childKey &&
        row[childKey].map((childRow, index) => (
          <tr key={`child-${index}`}>
            <td colSpan="100%">
              <table className="w-full">
                <tbody>
                  <TableRow row={childRow} indent={indent + 1} />
                </tbody>
              </table>
            </td>
          </tr>
        ))}
    </>
  );
}
