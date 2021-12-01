import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import DataTable from "./components/DataTable";

//ReactDom.render(<DataTable />, document.getElementById("root"));
ReactDom.render(
    <div>
        <h4>Learning React</h4><br/>
        <DataTable />
    </div>,
    document.getElementById("root"));