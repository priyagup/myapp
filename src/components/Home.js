import React, { Component } from "react";
import "./Home.css";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: "GroupID", field: "id" },
        { headerName: "GroupName", field: "name" },
        { headerName: "Description", field: "detail" }
      ],
      rowData: [
        { id: "001", name: "Computer Science", detail: "Oh teriii chal gya" },
        { id: "002", name: "Mechanical Engineering", detail: "Bewakof log" }
      ]
    };
  }
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "400px",
          width: "600px",
          marginleft: "- 300px",
          margintop: "50px"
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default Home;
