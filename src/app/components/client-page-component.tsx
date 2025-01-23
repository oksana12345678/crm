'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from './modal-components/promotion-form-modal';

interface ClientPageProps {
  companyId: string;
}

const ClientPageComponent: React.FC<ClientPageProps> = ({ companyId }) => {
  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={companyId}
      show={true}
      onClose={() => router.back()}
    />
  );
};

export default ClientPageComponent;
