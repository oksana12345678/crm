import React from 'react';
import { Status } from '@/app/components/common/status-label';
import CompanyTable from '@/app/components/company-components/company-table';
import CompanyRow from '@/app/components/company-components/company-row';

function Page() {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={Status.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}

export default Page;
