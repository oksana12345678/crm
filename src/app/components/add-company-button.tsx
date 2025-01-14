'use client';

import Button from './common/button';
import { useRouter } from 'next/navigation';

function AddCompanyButton() {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('./companies/new')}>
        Add company
      </Button>
    </>
  );
}
export default AddCompanyButton;
