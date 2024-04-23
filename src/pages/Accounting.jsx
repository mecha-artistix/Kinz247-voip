import FakeTable from "../assets/FakeTable.json";
import Table from "../components/Table";

function Accounting() {
  return (
    <div>
      <Table data={FakeTable} />
    </div>
  );
}
export default Accounting;
