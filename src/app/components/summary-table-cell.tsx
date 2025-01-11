import clsx from 'clsx';
import React from 'react';

export interface SummaryTableCellProps {
  align?: 'left' | 'right' | 'center';
  children: React.ReactNode;
}
function SummaryTableCell({ align, children }: SummaryTableCellProps) {
  return (
    <td
      className={clsx(
        'py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l ',
        `text-${align}`,
      )}
    >
      {children}
    </td>
  );
}

export default SummaryTableCell;
