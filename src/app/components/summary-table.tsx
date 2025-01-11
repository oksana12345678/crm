import React from 'react';

export interface SummaryTableProps {
  headers: React.ReactNode;
  children: React.ReactNode;
}
function SummaryTable({ headers, children }: SummaryTableProps) {
  return (
    <table className="table-auto w-full border-separate border-spacing-0">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default SummaryTable;
