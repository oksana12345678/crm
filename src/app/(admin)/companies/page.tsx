import React from 'react';
import Header from '@/app/components/header';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import { Status } from '@/app/components/common/status-label';
import AddCompanyButton from '@/app/components/add-company-button';
import CompanyTable from '@/app/components/company-components/company-table';
import CompanyRow from '@/app/components/company-components/company-row';

// export interface PageProps {}

function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          country={'USA'}
          status={Status.Pending}
          promotion={true}
          joinedDate={'02.01.2024'}
        />
      </CompanyTable>
    </>
  );
}

export default Page;
