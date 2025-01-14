'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal-components/modal';
import CompanyForm from '@/app/components/modal-components/company-form';

export default function Page() {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}
