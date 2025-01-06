import React from 'react';

export interface ActiveLabelProps {
  children?: React.ReactNode;
}

function ActiveLabel({ children }: ActiveLabelProps) {
  return (
    <span className="inline-flex items-center justify-start flex-row rounded-[28px] px-3.5 py-1 bg-[#dcfce7] text-[#15803d] text-sm font-medium">
      {children}
    </span>
  );
}

export default ActiveLabel;
