import React from 'react';
import Header from '../components/header';
import Toolbar from '../components/toolbar';
import SearchInput from '../components/search-input';
import AddCompanyButton from '../components/add-company-button';
import CompanyTable from '../components/company-table';
import CompanyRow from '../components/company-row';
import { Status } from '../components/common/status-label';

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
