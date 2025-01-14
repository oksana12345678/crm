import DashboardCard from '@/app/components/dashboard-card';
import { getCompanies, getCountries } from '@/lib/app';
import getCountById from '@/lib/utils/getCountById';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

async function Page() {
  const categories = await getCountries();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'countryId');

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-start gap-2 pb-5 px-5">
        <div>
          {categories.map(({ id, title }) => (
            <p
              key={id}
              className={clsx(
                'text-sm text-gray-900 font-medium',
                'before:inline-block before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
              )}
            >{`${title}-${counts[id] || 0}`}</p>
          ))}
        </div>
        <Image width={394} height={262} src="/images/world.svg" alt="world" />
      </div>
    </DashboardCard>
  );
}

export default Page;
