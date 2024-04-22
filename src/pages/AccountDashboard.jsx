import { FakeTable } from "../assets/FakeTable";

function AccountDashboard() {
  console.log(FakeTable);
  return (
    <>
      <div className=" h-[800px]  overflow-auto">
        <table className="h-144  table-fixed border-spacing-1  border border-k_dark_gray">
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Account ID</th>
              <th>Balance</th>
              <th>Gain Loss %</th>
              <th>ASR</th>
              <th>SDP</th>
              <th>Spent</th>
              <th>Gain Loss %</th>
              <th>Profit</th>
              <th>Margin</th>
              <th>Sessions</th>
              <th>Gain Loss %</th>
              <th>ASR</th>
            </tr>
          </thead>
          <tbody>
            {FakeTable.map((row, index) => (
              <tr key={index} className="text-center">
                <td>{row.accountName}</td>
                <td>{row.accountID}</td>
                <td>{row.balance}</td>
                <td>{row.asr}</td>
                <td>{row.sdp}</td>
                <td>{row.spent}</td>
                <td>{row.accountID}</td>
                <td>{row.profit}</td>
                <td>{row.sdp}</td>
                <td>{row.margin}</td>
                <td>{row.sessions}</td>
                <td>{row.profit}</td>
                <td>{row.gainLoss}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AccountDashboard;
