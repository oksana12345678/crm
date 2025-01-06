import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'not-active',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status?: Status;
  disabled?: boolean;
  className?: string;
}

function StatusLabel({
  children,
  // status,
  disabled,
  className,
}: StatusLabelProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center justify-start flex-row rounded-3xl px-3.5 py-1 text-sm font-medium',
        className,
        // status === Status.Active && 'bg-[#dcfce7] text-[#15803d]',
        // status === Status.NotActive && 'bg-[#fee2e2] text-[#b91c1c]',
        // status === Status.Pending && 'bg-[#ffedd5] text-[#c2410c]',
        // status === Status.Suspended && 'bg-[#dbeafe] text-[#1d4ed8]',
        {
          ['opacity-75 cursor-not-allowed']: disabled,
        },
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current"></div>
      {children}
    </div>
  );
}

export default StatusLabel;
