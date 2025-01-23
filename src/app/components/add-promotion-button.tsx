'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './common/button';

export interface AddPromotionButtonProps {
  companyId: string;
}

function AddPromotionButton({ companyId }: AddPromotionButtonProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(`/companies/${companyId}/new-promotion`)}
    >
      Add promotions
    </Button>
  );
}

export default AddPromotionButton;
