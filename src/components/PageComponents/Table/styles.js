import { styled } from "styled-components";



export const TableContainer = styled.div`
  margin: 40px 0;

  .--table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;

    td, th {
      border: 1px solid black;
      padding: 8px;
      text-align: center;
    }

    tbody tr:first-child {
      background-color: red;
      color: white;
    }
  }
`