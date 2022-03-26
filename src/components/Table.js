import React from "react";
import { useTable } from "react-table";

const Table = () => {
    
  const data = React.useMemo(
    () => [
      {
        col1: "Python",
        col2: "19,000",
        col3: "$120,000"
      },
      {
        col1: "Javascript",
        col2: "24,000",
        col3: "$118,000"
      },
      {
        col1: "Java",
        col2: "29,000",
        col3: "$104,000"
      },
      {
        col1: "C++",
        col2: "9,000",
        col3: "$97,000"
      },
       {
        col1: "C",
        col2: "8,000",
        col3: "$97,000"
       }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Language",

        accessor: "col1", // accessor is the "key" in the data
      },

      {
        Header: "# Jobs",

        accessor: "col2",
      },
      {
        Header: "Average Salary",

        accessor: "col3",
      },
    ],

    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <h1>Table</h1>
      <table {...getTableProps()} style={{ border: "1px solid gray" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "1px solid blue",
                    background: "aliceblue",
                    color: "black",
                    fontweight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "1px solid gray",
                        background: "papaywhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
