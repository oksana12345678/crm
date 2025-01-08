'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Button from './common/button';

const CompanyFormModal = dynamic(
  () => import('./modal-components/company-form-modal'),
  {
    ssr: false,
  },
);

function AddCompanyButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={showModal}
        onClose={() => setShowModal(false)}
      ></CompanyFormModal>
    </>
  );
}
export default AddCompanyButton;
