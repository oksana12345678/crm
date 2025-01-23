import React from 'react';
import clsx from 'clsx';
import { CompanyStatus } from '@/lib/app';

export interface StatusLabelProps {
  status: CompanyStatus;
  disabled?: boolean;
  className?: string;
  styled?: boolean;
}

const labelByStatus = {
  [CompanyStatus.Active]: 'Active',
  [CompanyStatus.NotActive]: 'Not Active',
  [CompanyStatus.Pending]: 'Pending',
  [CompanyStatus.Suspended]: 'Suspended',
};

function CompanyStatusLabel({
  status,
  disabled,
  className,
  styled = true,
}: StatusLabelProps) {
  const label = labelByStatus[status];
  if (!styled) return <>{label}</>;

  return (
    <div
      className={clsx(
        'inline-flex items-center justify-start flex-row rounded-3xl px-3.5 py-1 text-sm font-medium',
        className,
        status === CompanyStatus.Active && 'bg-[#dcfce7] text-[#15803d]',
        status === CompanyStatus.NotActive && 'bg-[#fee2e2] text-[#b91c1c]',
        status === CompanyStatus.Pending && 'bg-[#ffedd5] text-[#c2410c]',
        status === CompanyStatus.Suspended && 'bg-[#dbeafe] text-[#1d4ed8]',
        {
          ['opacity-75 cursor-not-allowed']: disabled,
        },
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current"></div>
      {labelByStatus[status]}
    </div>
  );
}

export default CompanyStatusLabel;
