import DashboardCard from '@/app/components/dashboard-card';
import { getSummaryCountries } from '@/lib/app';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

async function Page() {
  const data = await getSummaryCountries();
  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-start gap-2 pb-5 px-5">
        <div>
          {data.map(({ countryId, countryTitle, count }) => (
            <p
              key={countryId}
              className={clsx(
                'text-sm text-gray-900 font-medium',
                'before:inline-block before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
              )}
            >{`${countryTitle}-${count}`}</p>
          ))}
        </div>
        <Image width={394} height={262} src="/images/world.svg" alt="world" />
      </div>
    </DashboardCard>
  );
}

export default Page;
